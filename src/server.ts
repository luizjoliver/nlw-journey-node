import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
import cors from "@fastify/cors"
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";




const app = fastify()

app.register(cors, {
    origin:"http://localhost:3000"
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)


app.register(createTrip)
app.register(createActivity)
app.register(createLink)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(getActivities)
app.register(getLinks)

app.listen({port:3333}).then(() =>{
    console.log("Servidor iniciado");
    
})