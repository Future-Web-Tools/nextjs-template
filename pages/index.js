
import Layout from '@components/layout'
import Section from '@components/section'

import {
  Lock as LockIcon, Anchor as AnchorIcon, Key as KeyIcon, Layers as LayersIcon,
  Users as UsersIcon, Circle as CircleIcon, Award as AwardIcon, Sliders as SlidersIcon,
  Tool as ToolIcon, Copy as CopyIcon
} from 'react-feather'

export default function IndexPage () {
  const data = [
    {
      title: 'Web3 is fully integrated',
      icon: KeyIcon,
      message: `
        Properly implementing Web3 into your dapp can be challenging, this
        template comes with a Web3 fully integrated out of the box.
      `
    },
    {
      title: 'Secure one-click login',
      icon: LockIcon,
      message: `
        This template uses signature based sign-in, to offer users secure on-click sign-in with their addresses.
        <a href="https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial" target="_blank">Learn more about this paradigm</a>.
      `
    },
    {
      title: 'Smart contract integration',
      icon: LayersIcon,
      message: `
        How can a Web3 project be complete without a Smart Contract? This template features full smart contract 
        integration out of the box.
      `
    },
    {
      title: 'Personas Space integration',
      icon: UsersIcon,
      message: `
        <p><a href="http://personas.space" target="_blank" ><b>Personas.Space</b></a> is a plug-and-play social layer for EVM based dapps. It manages the social layer for
        your dapp, allowing you to focus more on other things.</p>
        <p>It can be viewed as a <i>Gravatar</i> for blockchain dapps! While Gravatar uses your email for identification, Personas uses your Blockchain address!</p>
        <p>Visit <a href="http://personas.space" target="_blank" ><b>Personas.Space</b></a> to get your free blockchain persona!</p>
      `
    },
    {
      title: 'Primsa ORM DB integration',
      icon: AnchorIcon,
      message: `
        <p><b>Primsa</b> is a really cool database ORM that makes it really easy to work with databases in your app. Blockchains
        are not exactly known for speed, we implemented it here to allow you to cache your data and to serve it faster without setting up a separate indexer.</p>
        <p>You can remove this feature if you plan on using other indexing services. Learn more about <a href="http://prisma.io" target="_blank">Prisma ORM</a>. </p>
      `
    },
    {
      title: 'Fullstack integration',
      icon: CircleIcon,
      message: `
        <p><b>Nextjs</b> is a complete frameworks for building full stack Javascript applications with just one unified codebase.
        Nextjs merges both the frondend and backend into one.</p>
        <p>The frontend of the Nextjs app is powered by React Js while the backend is powered by Node Js. Learn more about <a href="http://nextjs.org" target="_blank">Next Js</a>.</p>
      `
    },
    {
      title: 'Standard tooling integration',
      icon: ToolIcon,
      message: `
        This template uses the Standard JS eslint config to enforce a consistent coding style. With lint auto-fix on,
        husky and lint-staged already setup, you can be sure your code will always be neat when you save.
      `
    },
    {
      title: 'Totally free',
      icon: CopyIcon,
      message: `
        This template free to use. Just clone or fork the repo on Github to get started.
      `
    },
    {
      title: 'Flexible license',
      icon: SlidersIcon,
      message: `
        This template licensed under MIT, that gives developers the freedom to use it for whatever they want. You are free to
        customize it as you need and use it for any type of project - open source, closed source, commercial, whatever.
      `
    },
    {
      title: "You're in good company",
      icon: AwardIcon,
      message: `
        <p>This template is used by <a href="http://kafuilabs.com" target="_blank"> <b>Kafui Labs</b></a>'s projects, including:</p>

        <ul>
          <li><a href="http://personas.space" target="_blank"> <b>Personas.Space</b> </a></li>
          <li><a href="http://kupad.io" target="_blank"> <b>KuPad</b> </a></li>
          <li><a href="http://gift.win" target="_blank"> <b>Gift.win</b> </a></li>
        </ul>

        <p>You are in good company.</p>
      `
    }
  ]

  const goToDocs = () => window.open('https://github.com/Future-Web-Tools/nextjs-web3-template')

  return (
    <Layout>
      <Section small>

        <div>Quickly bootstrap a dapp with Future Web's Fullstack NextJs + Web3 template</div>

        {data.map((info, key) => {
          return (
            <div key={key} className='template-points-item'>
              <div>
                <div className='template-points-item-icon-title'>
                  <div className='template-points-item-icon'> <info.icon /> </div>
                  <h4 className='template-points-item-title'> {info.title} </h4>
                </div>
                <div className='template-points-item-message' dangerouslySetInnerHTML={{ __html: info.message }} />
              </div>
            </div>
          )
        })}

        <div style={{ divAlign: 'center', margin: '5rem 0 2rem' }}>
          <button className='button-primary' style={{ width: '100%' }} size='large' onClick={goToDocs}>
            <b>Get started</b>
          </button>
        </div>

        <style jsx>{`
        .template-points-item {
          margin: 3rem 0 1rem;
          border-bottom: 4px solid #fafafa;
        }
        .template-points-item-icon-title {
          display: flex;
          align-items: center;
          height: 100%;
          margin-bottom: 1.5rem;
        }
        .template-points-item-icon {
          margin-right: 1rem;
          margin-top: 0.8rem;
        }
        .template-points-item-title {
          font-weight: 800;
          margin: 0;
        }
        .template-points-item-message {
          font-size: 120%;
          font-weight: 500;
          margin-bottom: 3rem;
        }
      `}</style>
      </Section>
    </Layout>
  )
}
