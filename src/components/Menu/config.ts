import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.dragonstashdefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.dragonstashdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Dragon Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dragon Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Lottery Egg (Comming soon)',
    icon: 'TicketIcon',
    href: '#',
  },
  {
    label: 'NFT District (Comming soon)',
    icon: 'NftIcon',
    href: '#',
  },
  {
    label: 'Panzy (Comming soon)',
    icon: 'SunIcon',
    href: '#',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DragonStashDefi/',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@dragonstashdefi/s/dragonstash-finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@dragonstashdefi/',
      },
    ],
  }
]

export default config
