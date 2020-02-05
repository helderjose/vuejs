npm install
npm run serve
npm run build
npm run test:unit
npm run lint


# components/RandomNumber.vue
Inputs

    Data
        random number
    Props
        min & max
    User Interaction
        Generate Random Number Button

Outputs

    Rendered Output (DOM)
        Is the number displayed on the screen between min and max?


Tests could include:

    By default, the count should be 0
    If we click the generate button, we should get a random number between 1 and 10.
    If we change the min and max to 100 - 200 and click the button, we should get a number between 100 and 200.
