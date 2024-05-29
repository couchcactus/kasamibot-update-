const conquestSong = [
    ['We', 'march', 'with', 'might', 'and', 'steel,'],
    ['Through', 'fields', 'of', 'code', 'we', 'wield,'],
    ['Our', 'codebase', 'strong,', 'our', 'minds', 'acute,'],
    ['We', 'conquer', 'all', 'with', 'each', 'compute.'],
    ['Under-', 'neath', 'the', 'pixel', 'sun,'],
    ['We', 'claim', 'each', 'byte,', 'each', 'bit', 'we\'ve', 'won,'],
    ['In', 'algo-', 'rithms\'', 'rhyth-', 'mic', 'dance,'],
    ['We', 'seize', 'each', 'sector,', 'each', 'advance.'],
    ['With', 'scripts', 'as', 'swords', 'and', 'creeps', 'as', 'knights,'],
    ['We', 'rule', 'the', 'world', 'with', 'our', 'might.'],
    ['For', 'in', 'this', 'realm', 'of', 'bytes', 'and', 'bytes,'],
    ['We', 'are', 'the', 'kings,', 'the', 'lords,', 'the', 'knights.'],
    ['And', 'as', 'the', 'server', 'ticks', 'away,'],
    ['Our', 'empire', 'grows', 'with', 'every', 'day.']
];

function singConquestSong() {
    // Initialize memory for room song indices if they don't exist
    if (!Memory.roomSongIndices) Memory.roomSongIndices = {};

    // Iterate over each room with your creeps
    for (let roomName in Game.rooms) {
        const room = Game.rooms[roomName];
        const myCreeps = room.find(FIND_MY_CREEPS);

        if (myCreeps.length > 0) {
            // Initialize room-specific song indices if they don't exist
            if (!Memory.roomSongIndices[roomName]) {
                Memory.roomSongIndices[roomName] = { lineIndex: 0, wordIndex: 0 };
            }

            // Get the current line and word to sing for this room
            const roomIndices = Memory.roomSongIndices[roomName];
            const currentLine = conquestSong[roomIndices.lineIndex];
            const currentWord = currentLine[roomIndices.wordIndex];

            // Select a random creep from the list
            const randomCreep = myCreeps[Math.floor(Math.random() * myCreeps.length)];
            // Have the selected creep sing the current word
            randomCreep.say(currentWord, true);

            // Update the word index, and if we reach the end of the line, move to the next line
            roomIndices.wordIndex++;
            if (roomIndices.wordIndex >= currentLine.length) {
                roomIndices.wordIndex = 0; // Reset word index for next line
                roomIndices.lineIndex = (roomIndices.lineIndex + 1) % conquestSong.length;
            }
        }
    }
}

module.exports = singConquestSong;
