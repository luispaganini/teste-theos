import { NativeModules } from 'react-native';

const { DeviceInfoModule } = NativeModules;
interface DeviceInfoInterface {
    getAndroidVersion: () => Promise<string>;
    getAppVersion: () => Promise<string>;
    getDeviceModel: () => Promise<string>;
}
export default DeviceInfoModule as DeviceInfoInterface;