"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_stack_1 = require("@react-navigation/native-stack");
const Billing_1 = __importDefault(require("./Billing"));
const Stack = (0, native_stack_1.createNativeStackNavigator)();
const Route = () => {
    return (<>
            <Stack.Screen name="Billing" component={Billing_1.default} options={{ headerShown: false }}/>
        </>);
};
exports.default = Route;
