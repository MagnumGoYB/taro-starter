const readline = require('readline')
const { execSync } = require('child_process')
const address = require('address')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const exec = (commands) => {
  execSync(commands, { stdio: 'inherit', shell: true })
}

const questions = [
  {
    index: 0,
    title: 'Please enter your dev API host address: ',
    default: `http://${address.ip()}`
  },
  { index: 1, title: 'Please enter your dev API host port: ', default: '3000' }
]

;(async () => {
  const answers = []
  for (let question of questions) {
    const answer = await new Promise((resolve) => {
      rl.question(question.title, resolve)
      question.default && rl.write(question.default)
    })
    if (answer === '') {
      process.exit(0)
    }
    console.info(`✓ ${answer}`)
    answers.push(answer)
  }

  const [host, port] = answers

  console.log(`Starting with dev API host: ${host}:${port}`)

  rl.close()

  exec(
    `cross-env NODE_ENV=production TARO_APP_BUILD_ENV=local TARO_APP_API_HOST=${host}:${port} taro build --type weapp --watch`
  )
})()
