import Redis from 'ioredis'

const redis = new Redis({
  host: `${process.env.REDIS_HOST}`,
  port: parseInt(process.env.REDIS_PORT as string) ?? 6379,
  password: `${process.env.REDIS_PASSWORD}`,
  tls: {
    rejectUnauthorized: true
  }
})

export default redis;