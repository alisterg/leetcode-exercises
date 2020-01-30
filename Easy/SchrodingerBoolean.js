/*
 * Can a value be both true and false?
 *
 * Define omniBool so that it returns true for the following:
 *
 * omniBool == true && omniBool == false
 */

// This only works for the test case (omnibool == true and omnibool == false)
// it has to check for true *first*
const omnibool = {
    val: false,
    valueOf: () => this.val = !this.val
}