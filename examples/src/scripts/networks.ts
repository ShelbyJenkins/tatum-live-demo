import { Network } from '../../../src'
	
export function getNetwork(requestedNetwork: string): Network {
    const matchedNetworkKey = Object.keys(Network).find(key => Network[key as keyof typeof Network] === requestedNetwork);
    if (!matchedNetworkKey) {
        throw new Error(`No matching enum found for ${requestedNetwork}`);
    } else {
        return Network[matchedNetworkKey as keyof typeof Network];
    }
}