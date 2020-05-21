
const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/xkovalikd/RSS-reader.git',
        user: {
            name: 'David Kovalik',
            email: 'david.kovalik1@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)