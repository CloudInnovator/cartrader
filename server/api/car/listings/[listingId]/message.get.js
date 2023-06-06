import Joi from "joi"

export default defineEventHandler(async (event) => {
    const {listingId} =  event.context.params;
    return listingId;

});