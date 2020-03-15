import AgoraRTM from 'agora-rtm-sdk';
import EventEmitter from 'wolfy87-eventemitter';

import { currentUserID } from 'config';

import {
  AgoraRTMClient,
  AgoraRTMChannel,

  createRTMClient,
  createRTMChannel,

  RTMClientIniializeParams,
} from './helpers';


class RTMClient {

  private _bus: EventEmitter;
  private _client: AgoraRTMClient | null = null;
  private _channel: AgoraRTMChannel | null = null;

  public initialized = false;
  public timeout = 10000;

  private rtmToken = '';
  private currentUserID = '';

  constructor() {
    this._bus = new EventEmitter();
    this._client = createRTMClient();

    this.initialized = false;
    this.timeout = 10000;

    this.rtmToken = '';
    this.currentUserID = currentUserID;
  }

  public setRequestMaxTimeout(ms: number) {
    this.timeout = ms || 10000;
  }

  public async initialize({ uid, channel }: RTMClientIniializeParams) {
    if (this.initialized) return;
    if (!this._client) return;

    // login rtm
    await this._client.login({ uid, token: this.rtmToken });
    this.initClientEvent();

    // join rtm channel
    this._channel = createRTMChannel(this._client, channel);
    await this._channel.join();
    this.initChannelEvent();

    this.initialized = true;
  }

  /** 监听事件 */
  private initClientEvent() {
    if (!this._client) return;

    // 接收到点对点消息
    this._client.on('MessageFromPeer', ({ text }, peerId) => {
      if (peerId !== this.currentUserID) return;
    });
  }

  /** 监听频道事件 */
  private initChannelEvent() {
    if (!this._channel) return;

    // 频道消息
    this._channel.on('ChannelMessage', ({ text }, peerId) => {
      if (peerId !== this.currentUserID) return;
    });

    // 频道有人加入
    this._channel.on('MemberJoined', (memberId) => {

    });
  }

  /** 发送点对点消息 */
  public sendPeerMessage() {
    if (!this.initialized) return;
  }

  /** 发送频道消息 */
  public sendChannelMessage() {
    if (!this.initialized) return;
  }

  public async destroy() {
    if (!this.initialized) return;
    if (!this._client) return;

    try {
      this._client.removeAllListeners();
      await this._client.logout();
      this._bus.removeAllListeners();
    } catch (err) {
      console.warn('[RTMClient#destroy] error: ', err);
    }

    this._client = null;
    this.initialized = false;
  }

}

export const rtmClient = new RTMClient();
