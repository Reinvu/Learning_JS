import { loadPosts } from './posts.js';
import { setupEventListeners } from './events.js';

async function start() {
    setupEventListeners(); 
    await loadPosts(); 
}

start();