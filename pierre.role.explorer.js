var roleExplorer = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy == creep.carryCapacity) {
            if (Game.spawns['Spawn1'].carryCapacity == Game.spawns['Spawn1'].energy) {
                var targets = Game.rooms['W3N5'].find(FIND_CONSTRUCTION_SITES);
                
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }

            else {
                if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            if (creep.room == Game.rooms['W3N5']) {
                creep.moveTo(Game.flags['Flag1'], {visualizePathStyle: {stroke: '#ffffff'}});
            }

            else {
                var sources = Game.rooms['W2N5'].find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
};

module.exports = roleExplorer;