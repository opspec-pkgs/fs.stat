const fs = require('fs')

let stats
try {
    const statResult = fs.statSync(process.env.path)
    stats = {
        exists: true,
        groupId: statResult.gid,
        isDir: statResult.isDirectory(),
        isFile: statResult.isFile(),
        isSocket: statResult.isSocket(),
        isSymlink: statResult.isSymbolicLink(),
        userId: statResult.uid
    }

} catch ({ code }) {
    if (code === 'ENOENT') {
        stats = {
            exists: false,
            isDir: false,
            isFile: false,
            isSocket: false,
            isSymlink: false
        }
    }
}

fs.writeFileSync(
    '/stats',
    JSON.stringify(stats)
)