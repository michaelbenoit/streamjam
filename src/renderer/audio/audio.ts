import { getDevices, AudioIO, SampleFormat24Bit } from "naudiodon";
import { Readable} from 'stream';
import * as fs from 'fs';

export interface SjDevice {
    id: number;
    name: string;
    maxInputChannels: number;
    maxOutputChannels: number;
    defaultSampleRate: number;
    defaultLowInputLatency: number;
    defaultLowOutputLatency: number;
    defaultHighInputLatency: number;
    defaultHighOutputLatency: number;
    hostAPIName: number;
}

interface SjAudioStream {
    start(): void;
    quit(cb?: () => void): void;
    abort(cb?: () => void): void;
}

export class SjAudio {

    audio?: Readable & SjAudioStream;


    getDevices() : SjDevice[] {
       return getDevices();
    }

    start(device: SjDevice | undefined) {
        this.audio = AudioIO({
            inOptions: {
                channelCount: 2,
                sampleFormat: SampleFormat24Bit,
                sampleRate: 44100,
                deviceId: device?.id,
            }
        });

        const ws = fs.createWriteStream('rawAudio.raw');
        this.audio.pipe(ws);
        this.audio.start();
    }

    stop() {
        this.audio?.quit();
    }

}