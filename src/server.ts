import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
import cors from "@fastify/cors"




const app = fastify()

app.register(cors, {
    origin:"http://localhost:3000"
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)


app.register(createTrip)
app.register(confirmTrip)

app.listen({port:3333}).then(() =>{
    console.log("Servidor iniciado");
    
})