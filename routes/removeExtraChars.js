const express = require("express");
const router = express.Router();

const baseURL = "https://jsonplaceholder.typicode.com/users";

router.get("/:string/:count", function (req, res) {
    let parsedString = "";
    let activeIndex = '';
    let requestedString = req.params.string;
    let requestedCount = req.params.count;
    for (var i = 0; i < requestedString.length; i++) {
        if (requestedString[i] == requestedString[i - 1] && activeIndex < requestedCount) activeIndex += 1, parsedString += requestedString[i];
        if (requestedString[i] !== requestedString[i - 1]) activeIndex = 1, parsedString += requestedString[i];
        requestedString[i - 1] = requestedString[i];
    }
    console.log(requestedString + ' => ' + parsedString);
    res.send(parsedString)
});

module.exports = router;

/**
 * @swagger
 * /remove-chars/{string}/{count}:
 *   get:
 *     summary: Removes Consecutive chars.
 *     parameters:
 *      - in: path
 *        name: string
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: count
 *        schema:
 *          type: integer
 *        required: true
 *     description: Removes characters from consecutive runs of the same character, where the length of the run is greater than the input parameter.
 *     responses:
 *       200:
 *         description: Removes characters from consecutive runs of the same character.
 */
