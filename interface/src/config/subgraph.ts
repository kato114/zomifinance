import { ARBITRUM, AVALANCHE } from "./chains";

export const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals",
    nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  },

  [AVALANCHE]: {
    stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_state_test",
    // stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_avalanche_trade_info_test",
    referrals: "https://api.thegraph.com/subgraphs/name/hspdev0814/minmaxtest",
    trades:"https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_avalanche_trade_info_test",
  },

  common: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};
