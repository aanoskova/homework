const {getData, endpoints } =  require ("../appModules/api");
const staticFile = require ("../appModules/http-utils/static-file");
const {makeRatingFile, config} = require("../rating");

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games);

    await makeRatingFile(config.PATH_TO_RATING_FILE,data);

    res.staticCode = 200;
    staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;