import React from "react";
import { Button, IOptionProps, HTMLSelect } from "@blueprintjs/core";
import { SjDevice, SjAudio } from "../audio/audio";

interface HomeState {
  devices: IOptionProps[];
  selectedDevice?: SjDevice;
}

export class HomeComponent extends React.Component<unknown, HomeState> {
  audio: SjAudio = new SjAudio();
  devices: SjDevice[] = [];

  constructor(props: unknown) {
    super(props);
    this.state = {
      devices: [],
    };
  }

  refreshDevices = () => {
    this.devices = this.audio.getDevices();

    this.setState((s) => {
      return {
        ...s,
        ...{
          devices: this.devices.map((d) => {
            return {
              label: d.name,
              value: d.id,
            };
          }),
        },
      };
    });
  };

  setSelectedDevice = (id: string) => {
    const d = this.devices.find((d) => d.id === +id);
    this.setState((s) => {
      return {
        ...s,
        ...{
          selectedDevice: d,
        },
      };
    });
  };

  componentDidMount = () => {
    this.refreshDevices();
  };

  render() {
    return (
      <div>
        <HTMLSelect
          options={this.state.devices}
          onChange={(e) => this.setSelectedDevice(e.currentTarget.value)}
        ></HTMLSelect>
        <Button
          icon="refresh"
          text="Refresh Devices"
          onClick={this.refreshDevices}
        />
        <Button
          text="Start"
          onClick={() => this.audio.start(this.state.selectedDevice)}
        />
        <Button text="stop" onClick={() => this.audio.stop()} />
      </div>
    );
  }
}
