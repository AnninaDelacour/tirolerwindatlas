// https://raw.githubusercontent.com/astridx/maplibre-app/main/config-overrides.js
module.exports = function override(config, env) {
    config.module.rules.push({
        resolve: {
            alias: {
                ...config.resolve.alias,
            },
        },
    })
    return config
}