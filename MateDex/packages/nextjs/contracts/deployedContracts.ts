/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    PendulumFactory: {
      address: "0x2Cc4C9C85459D6E0Ee8e0205770C7994C76BC2a1",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_dataFeed",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "chainlinkDataFeed",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createOrb",
          inputs: [
            {
              name: "_startingPriceInUSD",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_coolDownTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_taxRate",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createProfile",
          inputs: [
            {
              name: "_profileDetailsCID",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "experts",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "detailsCID",
              type: "string",
              internalType: "string",
            },
            {
              name: "expertRating",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAliveUpcomingOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExpertOwnedOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExpertProfile",
          inputs: [
            {
              name: "_expert",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct PendulumFactory.ExpertProfile",
              components: [
                {
                  name: "detailsCID",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "expertRating",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "orbsOwned",
                  type: "address[]",
                  internalType: "address[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUserOwnedOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isExpert",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isOrb",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "orbs",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "orbsOwnedByUser",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "updateOrbsOwned",
          inputs: [
            {
              name: "_orb",
              type: "address",
              internalType: "address",
            },
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateProfile",
          inputs: [
            {
              name: "_profileDetailsCID",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      inheritedFunctions: {},
    },
  },
  80001: {
    PendulumFactory: {
      address: "0x5a8F0eD3872b3ea31293483b9168820Be81D3655",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_dataFeed",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "chainlinkDataFeed",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createOrb",
          inputs: [
            {
              name: "_startingPriceInUSD",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_coolDownTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_taxRate",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createProfile",
          inputs: [
            {
              name: "_profileDetailsCID",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "experts",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "detailsCID",
              type: "string",
              internalType: "string",
            },
            {
              name: "expertRating",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAliveUpcomingOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExpertOwnedOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExpertProfile",
          inputs: [
            {
              name: "_expert",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct PendulumFactory.ExpertProfile",
              components: [
                {
                  name: "detailsCID",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "expertRating",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "orbsOwned",
                  type: "address[]",
                  internalType: "address[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUserOwnedOrbs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isExpert",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isOrb",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "orbs",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "orbsOwnedByUser",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "updateOrbsOwned",
          inputs: [
            {
              name: "_orb",
              type: "address",
              internalType: "address",
            },
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateProfile",
          inputs: [
            {
              name: "_profileDetailsCID",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;