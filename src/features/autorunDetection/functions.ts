import { Webhook } from "discord-webhook-ts";
import { uiColor } from "~/constants";
import { log } from "~/utils";
import {
    colorHexToInteger,
    sendToDiscordWebhook,
} from "../discordNotification";

const sendNotification = () => {
    const threshold =
        unsafeWindow.LAOPLUS.config.config.features.autorunDetection.threshold;
    const body: Webhook.input.POST = {
        embeds: [
            {
                color: colorHexToInteger(uiColor.error.hex()),
                title: "自動周回停止",
                description: `戦闘開始のインターバルがしきい値(${threshold}分)を超えました`,
            },
        ],
    };

    if (
        unsafeWindow.LAOPLUS.config.config.features.discordNotification
            .interests.autorunStop
    ) {
        void sendToDiscordWebhook(body);
    } else {
        log.debug(
            "Autorun Detection",
            "設定が無効のため、Discord通知を送信しませんでした",
            body
        );
    }

    clearTimer();
};

const getDalayMs = () => {
    const threshold = Number(
        unsafeWindow.LAOPLUS.config.config.features.autorunDetection.threshold
    );
    const thresholdMs = threshold * 60 * 1000;
    return thresholdMs;
};

const getLatestDate = (delayMs: number) => {
    const now = new Date().getTime();
    return new Date(now + delayMs);
};

export const clearTimer = () => {
    const status = unsafeWindow.LAOPLUS.status;
    const { enterTimerId } = status.status.autorunDetection;
    if (enterTimerId) {
        window.clearTimeout(enterTimerId);
        status.set({
            autorunDetection: { enterTimerId: null, latestEnterTime: null },
        });
        log.debug("Autorun Detection", "Reset enterTimer");
    }

    log.log(
        "Autorun Detection",
        "Reset Timers",
        status.status.autorunDetection
    );
};

/**
 * @package
 */
export const enter = () => {
    const status = unsafeWindow.LAOPLUS.status;
    const { enterTimerId } = status.status.autorunDetection;

    if (enterTimerId !== null) {
        window.clearTimeout(enterTimerId);
        log.debug("Autorun Detection", "Remove Current Enter Timer");
    }
    const delay = getDalayMs();
    const newEnterTimerId = window.setTimeout(sendNotification, delay);
    status.set({
        autorunDetection: {
            enterTimerId: newEnterTimerId,
            latestEnterTime: getLatestDate(delay),
        },
    });
    log.log("Autorun Detection", "Set Enter Timer", delay);
};
