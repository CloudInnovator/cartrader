import cars from "@/data/cars.json"
export default defineEventHandler((event) =>{
    console.log("I am hit too")
    
    const {id} =  event.context.params;
    console.log(id)

    
    const car = cars.find((c) =>{
        return c.id===parseInt(id)
  

    if(!car){
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID of ${id} does not exists`
        })
    }
});





});