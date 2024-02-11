//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "./DeployHelpers.s.sol";
import {Pendulum} from "../contracts/Pendulum.sol";
import {PendulumFactory} from "../contracts/PendulumFactory.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);
    address polygonMumbai = 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada;
    address scrollSepolia = 0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41;
    address baseGeroli = 0xcD2A119bD1F7DF95d706DE6F2057fDD45A0503E2;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);
        // matci to usd chainlink contract
        PendulumFactory pendulum = new PendulumFactory(baseGeroli);
        console.logString(
            string.concat(
                "PendulumFactory contract deployed at: ",
                vm.toString(address(pendulum))
            )
        );
        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
