
var requireUserCountWithinTime = function(userCount, timeLimit) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people in <span class='emphasis-color'>" + timeLimit.toFixed(0) + "</span> seconds or less",
        evaluate: function(world) {
            if(world.elapsedTime >= timeLimit || world.transportedCounter >= userCount) {
                return world.elapsedTime <= timeLimit && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireUserCountWithMaxWaitTime = function(userCount, maxWaitTime) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people and let no one wait more than <span class='emphasis-color'>" + maxWaitTime.toFixed(1) + "</span> seconds",
        evaluate: function(world) {
            if(world.maxWaitTime >= maxWaitTime || world.transportedCounter >= userCount) {
                return world.maxWaitTime <= maxWaitTime && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireUserCountWithinTimeWithMaxWaitTime = function(userCount, timeLimit, maxWaitTime) {
    return {
       description: "Transport <span class='emphasis-color'>" + userCount + "</span> people in <span class='emphasis-color'>" + timeLimit.toFixed(0) + "</span> seconds or less and let no one wait more than <span class='emphasis-color'>" + maxWaitTime.toFixed(1) + "</span> seconds",
       evaluate: function(world) {
            if(world.elapsedTime >= timeLimit || world.maxWaitTime >= maxWaitTime || world.transportedCounter >= userCount) {
                return world.elapsedTime <= timeLimit && world.maxWaitTime <= maxWaitTime && world.transportedCounter >= userCount;
            } else {
                return null;
            }
       }
    };
};

var requireUserCountWithinMoves = function(userCount, moveLimit) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people using <span class='emphasis-color'>" + moveLimit + "</span> elevator moves or less",
        evaluate: function(world) {
            if(world.moveCount >= moveLimit || world.transportedCounter >= userCount) {
                return world.moveCount <= moveLimit && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireDemo = function() {
    return {
        description: "Perpetual demo",
        evaluate: function() { return null; }
    };
};

/* jshint laxcomma:true */
var challenges = [
     {options: {floorCount: 6, elevatorCount: 2, spawnRate: 0.5, elevatorCapacities: [12]}, condition: requireUserCountWithinTime(200, 600)}
    ,{options: {floorCount: 6, elevatorCount: 2, spawnRate: 0.5, elevatorCapacities: [12]}, condition: requireUserCountWithinTime(300, 600)}
];
/* jshint laxcomma:false */
