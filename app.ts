
const secondsHand: HTMLElement = document.getElementById('seconds-hand') as HTMLElement;
const minutesHand: HTMLElement = document.getElementById('minutes-hand') as HTMLElement;
const hoursHand: HTMLElement = document.getElementById('hours-hand') as HTMLElement;



function getTime(): void {
    const now: Date = new Date();
    const seconds: number = now.getSeconds();
    const minutes: number = now.getMinutes();
    const hours: number = now.getHours();

    /* 360 / 60*/
    const timeInterval: number = 6;
    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;

    minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
    hoursHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;

}



setInterval(getTime, 1000)




