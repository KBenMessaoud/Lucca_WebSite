// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'


const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin:'*',
  methods: ["GET"]
})

const apiUrl = 'https://imt-nantes.ilucca-demo.net'; // URL de base de l'API Lucca pour l'instance de démonstration
const apiKey = '4f92437e-4b4a-4bf7-9855-5ed73f3fe7ff'; // Clé API générée pour l'instance de démo

const headers = {'Authorization': `lucca application=${apiKey}`} // Format correct pour l'authentification à l'API Lucca

// Declare a route
fastify.get('/api/*', async (request, reply) => {
  process.stdout.write('proxi '+ apiUrl+request.url);
  const result= await fetch(apiUrl+request.url, {method:'GET', headers}) ;
  return result.json()
});

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
  process.stderr.write('error', err)
}
process.stdout.write('server listening on localhost:3000');
