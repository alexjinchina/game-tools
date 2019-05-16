import { fs, path, lodash, Permission, getPackageExternalDirectoryPath } from "../utils";

export default class Game {
    constructor(name, config, params = {}) {
        this.name = name
        this.config = config

        this.params = lodash.defaults(params || {}, {
            info(msg) {
                console.info(msg);
                if (this.infoCallback) this.infoCallback(msg)
            },
            error(error) {
                console.error(error.message || error.toString());
                if (this.errorCallback) this.infoCallback(error)

            }

        });

        this.saveFiles = {}

        this.packageName = config.package_name
        this.externalDirectoryPath = getPackageExternalDirectoryPath(this.packageName)

    }

    get packageName() {
        return this.config.package_name
    }

    get externalDirectoryPath() {
        return getPackageExternalDirectoryPath(this.packageName)
    }

    parseFilePath(filePath) {

        if (filePath.startsWith("${externalDirectoryPath}"))
            return filePath.repale("${externalDirectoryPath}", this.externalDirectoryPath)

        return filePath

    }

    toString() {
        return `<Game: ${this.name}>`
    }

    async load(params = {}) {
        params = lodash.defaults(params || {}, this.params)

        params.info(`loading ${this.name}...`)

        this.saveFiles = {}
        for (const [saveFileName, saveFileConfig] of lodash.toPairs(this.config.save_files)) {
            params.info(`loading save file ${saveFileName}...`)
            // switch (saveFileConfig.type) {

            // }

        }
    }




}