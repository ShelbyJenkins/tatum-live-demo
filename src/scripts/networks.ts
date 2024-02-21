import { 
    Network, 
    LOAD_BALANCER_NETWORKS, 
    isLoadBalancerNetwork,
    isEvmBasedNetwork,
    isUtxoBasedNetwork,
    isXrpNetwork,
    isSolanaNetwork,
    isTronNetwork,
    isEosNetwork,
    isTezosNetwork,
    isCardanoNetwork,
    isStellarNetwork,
    isAlgorandAlgodNetwork,
    isAlgorandIndexerNetwork,
    isBnbLoadBalancerNetwork,
} from '@tatumio/tatum'

export interface ChainsAndNetworks {
    [key: string]: string[];
}

export function getNetwork(requestedNetwork: string): Network {
    const matchedNetworkKey = Object.keys(Network).find(key => Network[key as keyof typeof Network] === requestedNetwork);
    if (!matchedNetworkKey) {
        throw new Error(`No matching enum found for ${requestedNetwork}`);
    } else {
        return Network[matchedNetworkKey as keyof typeof Network];
    }
}

export function getChainsAndNetworks(serviceType: string): ChainsAndNetworks {
    let chainsAndNetworks: ChainsAndNetworks = {};
    const serviceFunction = getServiceFunction(serviceType);
    Object.values(Network).forEach((val) => {
        if (serviceFunction(val)) {
            const chainType = getChainType(val);
            if (!chainsAndNetworks[chainType]) {
                chainsAndNetworks[chainType] = [];
            }
            chainsAndNetworks[chainType].push(val);
        }
    });
    Object.entries(chainsAndNetworks).forEach(([key, value]) => {
        chainsAndNetworks[key] = value.sort();
    });
    return chainsAndNetworks;
}


function getServiceFunction(serviceType: string) {
    switch (serviceType) {
        case "LOAD_BALANCER_NETWORKS":
            return isLoadBalancerNetwork;
        default:
            throw new Error(`Service type not found for ${serviceType}`);
    }
}

function getChainType(chain: any): string {
    if (isEvmBasedNetwork(chain)) {
        return 'EVM';
    } else if (isUtxoBasedNetwork(chain)) {
        return 'UTXO';
    } else if (isXrpNetwork(chain)) {
        return 'XRP';
    } else if (isSolanaNetwork(chain)) {
        return 'SOL';
    } else if (isTronNetwork(chain)) {
        return 'TRON';
    } else if (isEosNetwork(chain)) {
        return 'EOS';
    } else if (isTezosNetwork(chain)) {
        return 'TEZOS';
    } else if (isCardanoNetwork(chain)) {
        return 'CARDANO';
    } else if (isStellarNetwork(chain)) {
        return 'STELLAR';
    } else if (isAlgorandAlgodNetwork(chain)) {
        return 'ALGORAND';
    } else if (isAlgorandIndexerNetwork(chain)) {
        return 'ALGORAND';
    } else if (isBnbLoadBalancerNetwork(chain)) {
        return 'BNB';
    }
    throw new Error(`Chain type not found for ${chain}`);        
    }
