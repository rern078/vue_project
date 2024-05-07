<template>
    <main id="main-container">
        <div v-if="screen === 'config'" id="config-container">
            <h1>Mathificent</h1>
            <SelectInput :currentValue="operation" label="Operation" id="operation" v-model="operation"
                :options="operations" @input="(o) => (this.operation = o)" />
            <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber"
                :options="numbers" @input="(m) => (this.maxNumber = m)" />
            <PlayButton @play-button-click="play" />
            <p>current operation: {{ operation }}</p>
            <p>max number: {{ maxNumber }}</p>
        </div>
        <div v-else-if="screen === 'play'" id="game-container" class="text-center">
            <div class="row border-bottom" id="scoreboard">
                <div class="col px-3 text-left">
                    <GameScore />
                </div>
                <div class="col px-3 text-right">
                    <GameTimer />
                </div>
            </div>
            <div class="row text-secondary my-2" id="equation">
                <GameEquation :answer="input" />
            </div>
            <div class="row" id="buttons">
                <div class="col">
                    <button class="btn btn-primary number-button" v-for="button in buttons" :key="button"
                        @click="setInput(button)">{{ button
                        }}</button>
                    <button class="btn btn-primary" @click="clear">Clear</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';
import GameScore from './GameScore';
import GameTimer from './GameTimer';
import GameEquation from './GameEquation';

export default {
    name: 'MainContainer',
    components: {
        SelectInput,
        PlayButton,
        GameScore,
        GameTimer,
        GameEquation
    },
    data: function () {
        return {
            operations: [
                ['Addition', '+'],
                ['Subtraction', '-'],
                ['Multiplication', 'x'],
                ['Division', '/']
            ],
            operation: 'x',
            maxNumber: '10',
            buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            screen: 'config',
            input: ''
        }
    },
    computed: {
        numbers: function () {
            const numbers = [];
            for (let number = 2; number <= 100; number++) {
                numbers.push([number, number]);
            }
            return numbers;
        }
    },
    methods: {
        config() {
            this.screen = "config";
        },
        play() {
            this.screen = "play";
        },
        setInput(value) {
            
        }
    },
}
</script>
<style scoped>
#main-container {
    margin: auto;
    width: 380px;
}

button.number-button {
    border-radius: .25em;
    font-size: 3em;
    height: 2em;
    margin: .1em;
    text-align: center;
    width: 2em;
}

#clear-button {
    border-radius: .25em;
    font-size: 3em;
    height: 2em;
    margin: .1em;
    text-align: center;
    width: 4.2em;
}

#scoreboard {
    font-size: 1.5em;
}
</style>
