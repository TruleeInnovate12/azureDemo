// craco.config.js
module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const eslintRule = webpackConfig.module.rules.find(
                (rule) => rule.use && rule.use.some((use) => use.loader && use.loader.includes('eslint-loader'))
            );

            if (eslintRule) {
                eslintRule.use = eslintRule.use.map((use) => {
                    if (use.loader && use.loader.includes('eslint-loader')) {
                        return {
                            ...use,
                            options: {
                                ...use.options,
                                // Add any specific ESLint options here
                            },
                        };
                    }
                    return use;
                });
            }

            return webpackConfig;
        },
    },
};