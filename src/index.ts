import consola from "consola"
import {
	type CompilationOptions,
	type EntryPointConfig,
	generateDtsBundle,
} from 'dts-bundle-generator';
import { getTsconfig } from 'get-tsconfig';
import Bun  from 'bun';
import path from "path"


function zip<A, B>(a: A[], b: B[]): [A, B][] {
    return a.map((v, i) => [v, b[i]]);
}

export function dts(options?: CompilationOptions) {
    return {
        name: "dts",
        async setup(build: Bun.PluginBuilder) {
            const tsconfig = getTsconfig()
            if (!tsconfig) {
                consola.warn('No tsconfig found')
                return
            }
            
            const entries: EntryPointConfig[] = build.config.entrypoints.map((entry) => ({
                filePath: entry,
            }))
            const config = {
                preferredConfigPath: tsconfig.path,
                ...options,
            } as CompilationOptions
            const srcDir = build.config.root ?? 'src'
            const outDir = build.config.outdir ?? 'dist'
            const result = generateDtsBundle(entries, config)
            const zippedResult = zip(entries.map((x) => x.filePath), result)
            for (const [filePath, content] of zippedResult) {
                const relativePath = path.relative(srcDir, filePath);
                const destPath = path.join(outDir, relativePath).replace(/\.ts$/, '.d.ts');
                consola.info('Writing', destPath, content.length, 'bytes')
                await Bun.write(destPath, content)
            }
        }
    }
}
