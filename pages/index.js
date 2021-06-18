
import { Button, Collapse, Text } from '@geist-ui/react'
import Layout from '@components/layout'
import Section from '@components/section'

export default function IndexPage () {
  const data = [
    {
      title: 'Web3 fully integrated',
      message: `
        Properly implementing Web3 into your dapp can be challenging, this
        template comes with a Web3 fully integrated out of the box.
      `
    },
    {
      title: 'Secure one-click login',
      message: `
        This template uses signature based sign-in, to offer users secure on-click sign-in with their addresses.
        Learn more about this approach.
      `
    },
    {
      title: 'Smart contract integration',
      message: `
        How can a Web3 project be complete without a Smart Contract? This template features full smart contract 
        integration out of the box.
      `
    },
    {
      title: 'Personas Space integration',
      message: `
        Personas.Space is a plug-and-play social layer for EVM based dapps. It manages the social layer for
        your dapp, allowing you to focus more on other things.
      `
    },
    {
      title: 'Primsa ORM DB integration',
      message: `
        Prisma is a really cool database ORM that makes it really easy to work with databases in your app. Blockchains
        are not exactly known for speed, we implemented it here to allow to cache your data and to serve it faster. 
      `
    },
    {
      title: 'Fullstack integration',
      message: `
        Nextjs is a complete frameworks for building full stack Javascript applications with just one unified codebase.
        Nextjs merges both the frondend and backend into one. The frontend of the Nextjs app is powered by React Js
        while the backend is powered by Node Js. Learn more about Next Js.
      `
    },
    {
      title: 'Standard tooling integration',
      message: `
        This template uses the Standard JS eslint config to enforce a consistent coding style. With lint auto-fix on,
        husky and lint-staged already setup, you can be sure your code will always be neat when you save.
      `
    },
    {
      title: 'Totally free',
      message: `
        This template free to use. Just clone or fork the repo on Github to get started.
      `
    },
    {
      title: 'Flexible license',
      message: `
        This template licensed under MIT, that gives developers the freedom to use it for whatever they want. You are free to
        customize it as you need and use it for any type of project - open source, closed source, commercial, whatever.
      `
    },
    {
      title: "You're in good company",
      message: `
        This template is used by Kafui Labs's projects, including Personas.Space. You are in good company.
      `
    }
  ]

  const goToDocs = () => window.open('https://github.com/Future-Web-Tools/nextjs-web3-template')

  return (
    <Layout>
      <Section small>

        <Text h2>Welcome to the NextJs + Web3 template</Text>

        {data.map((info, key) => {
          return (
            <div key={key} className='template-points-item'>
              <Collapse shadow title={info.title}>
                <Text> {info.message} </Text>
              </Collapse>
            </div>
          )
        })}

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Button style={{ width: '100%' }} size='large' onClick={goToDocs}>Get started</Button>
        </div>

        <style jsx>{`
        .template-points-item {
          margin-bottom: 1rem;
        }
      `}</style>
      </Section>
    </Layout>
  )
}
