const { spawn } = require('child_process');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const path = require('path');

const rootDir = __dirname;

const SERVER_PATH = path.join(rootDir, 'server-files');

const SERVER_BIN = path.join(SERVER_PATH, 'ragemp-server.exe');
let serverProcess = null;

function syncDistToServerFiles() {
    console.log('[SYNC] Copying files to server-files...');

    fs.copySync(path.join(rootDir, './dist/client_packages'), path.join(SERVER_PATH, 'client_packages'), { overwrite: true });
    fs.copySync(path.join(rootDir, './dist/packages'), path.join(SERVER_PATH, 'packages'), { overwrite: true });

    console.log('[SYNC] Files synced.');
}

function killServer() {
    if (serverProcess) {
        console.log('[SERVER] Killing existing process...');
        serverProcess.kill();
        serverProcess = null;
    }
}

function startServer() {
    process.chdir(path.join(rootDir, 'server-files'));
    console.log('[SERVER] Starting ragemp-server.exe...\n');
    serverProcess = spawn(SERVER_BIN, [], { stdio: 'inherit' });

    serverProcess.on('exit', (code) => {
        console.log(`[SERVER] Process killed with code: ${code}`);
    });
}

function startWatcher() {
    process.chdir(rootDir);
    chokidar.watch([path.join(rootDir, '/dist')]).on('all', (event, pathChanged) => {
        console.log(`[WATCHER] Change detected: ${event} in ${pathChanged}`);
        syncDistToServerFiles();
        killServer();
        startServer();
    });
}

setTimeout(() => {
    syncDistToServerFiles();
    startServer();
    startWatcher();
}, 2000)