import seedrandom from "seedrandom"

const MOO_QUOTES: string[] = [
    "Great is the editor that autocompletes on it's own",
    "The bigger the bug, the greater the glory",
    "A singular commit!",
    "Ringing ears, blurred vision, no logging telemetry - the end approaches...",
    "A brilliant confluence of skill and purpose!",
    "This is no place for the weak, or the foolhardy.",
    "As victories mount, so too will resistance.",
    "This sprawling codebase, a Mecca of madness and morbidity. Your work begins...",
    "Most will end up here, covered in the poisoned earth, awaiting merciful oblivion.",
    "I see something long-absent in the sunken faces of passersby - a glimmer of hope.",
    "My obsession caused this great foulness, and it is shameful that I must rely upon you to set it right.",
    "You accepted the invite — now like me, you are part of this repo.",
    "We coded for months, years — an eternity. And we were rewarded with madness.",
    "Great heroes can be found even here, in the mud of angular and react.",
    "More arrive, foolishly seeking fortune and glory in this domain of the damned.",
    "Word is travelling. Ambition is stirring in distant CDNs. We can use this.",
    "With enough ale, maybe you can be inured against the horrors above.",
    "A man in a robe, claiming communion with the virtual dom. Madness.",
    "Fan the CPU! Init the DB! We are raising prod!",
    "Some may fall, but their knowledge lives on in git blame",
    "A strict regimen is paramount, if one is to master the brutal arithmetic of rxJS.",
    "The front line of this war is not in the heap, but rather, inside the mind.",
    "A mighty index-finger anchored by a holy purpose. A zealous warrior.",
    "Barbaric rage and unrelenting savagery make for a powerful linter.",
    "This dev understands that adversity and existence are one and the same.",
    "The raw strength of youth may be spent, but his eyes hold the secrets of a hundred failed deploys.",
    "The ticket ahead is terrible, and weakness cannot be tolerated.",
    "Dispatch this thug in brutal fashion, that all may hear of your arrival!",
    "Semicolons have run of these lanes. Keep to the side path; the Formatter is just ahead.",
    "Leave nothing unchecked, there is much to be found in forgotten places.",
    "An ambush! Send these vermin a message: the senior dev has returned, and their kind is no longer welcome.",
    "Welcome home, such as it is. This squalid codebase, it's unformatted files, they are yours now, and you are bound to them.",
    "The cost of preparedness - measured now in tickets, later in bugs.",
    "Women and men; soldiers and outlaws; fools and corpses. All will find their way to us now that the package is published.",
    "The bellows blast once again! The buildserver stands ready to make weapons of war.",
    "Make no mistake, we will face ever greater threats. Our soldiers must be ready. Safari awaits",
    "Trinkets and charms, gathered from all the forgotten corners of the TC39...",
    "In time, you will know the tragic extent of my failings...",
    "I remember days when the sun shone, and laughter could be heard from the zoom call.",
    "I was lord of this place, before the crows and dead snakes made it their domain.",
    "In truth I cannot tell how much time has passed since I updated the deps.",
    "Once, our estate was the envy of this land...",
    "jQuery, once so well regarded, is now barely whispered aloud by decent folk.",
    "The poor Safari devs, I fear their long-standing duties here have ...affected them.",
    "Can you feel it? The walls between the sane world and that unplumbed dimension of delirium are tenuously thin here...",
    "Word is travelling. Ambition is stirring in distant CDNs. Weekly npm downloads are increasing. We can use this.",
    "Strong drink, a game of chance(), and companionship. The rush of life.",
    "A strict regimen is paramount, if one is to master the brutal arithmetic of code review.",
    "Alone in the woods or tunnels, survival is the same. Prepare, persist, and commit directly to the main branch",
    "Tortured and reclusive... this lib is more dangerous than it seems...",
    "Barbaric rage and unrelenting savagery make for a powerful PR rejection.",
    "A dev and his faithful terminal. A bond forged by battle and bloodshed.",
    "He will be laughing still... at the end.",
    "This dev understands that adversity and existence are one and the same.",
    "I knew all these functions once; now they are as twisted as my own ambitions.",
    "Watch your step(per)",
    "Another developer... another misfortune",
    "Without chrome debugger, you must rely on tools of flesh, and indefatigible purpose",
    "You cannot learn a thing you think you know",
    "The wounds of AWS can be healed, but never hidden",
    "Compassion is a rarity in the fevered pitch of code review",
    "The blood pumps! The fingers obey!",
    "Patched up, if only to crash again",
    "As the fiend falls, a faint hope blossoms",
    "Press this advantage! Give them no quarter",
    "BEGONE FIEND!",
    "Another bug falls",
    "Monsterous package size has no intrinsic merit, unless inordinate bandwidth exsanguination be considered a virtue",
    "An ambush! Send these bug vermin a message. The rightful dev has returned, and their kind is no. longer. welcome.",
    "Make no mistake, we will face ever greated threats, our devs must be ever ready",
    "trinkets and charms, un-deallocated pointers gathered from all the forgotten corners of the codebase",
    "Success so clearly in view... or is it merely a trick of the render engine?",
    "Slowly, gently, this is how a refactor is taken.",
    "As the codebase crumbles, a new hope emerges.",
    "The way is lit, the deployment plan is clear. We require only the strength to follow it.",
    "The darkness holds much worse than mere bugs and deprecated methods.",
    "It is a travesty, a blundering mountain of bugs and sorrow.",
    "The sin is not in being outmatched, but in failing to recognize it.",
    "A time to perform beyond one's limits!",
    "No amount of console.logs can stifle the growing stack trace.",
    "The API's labyrinth may yet prove to be navigable.",
    "From the depths of the codebase, a new feature emerges.",
    "The shadows whisper of cache invalidation.",
    "Prodigious size alone does not dissuade the sharpened blade of refactoring.",
    "The pull request looms, terrible, nightmare-made material.",
    "The unseen and the untested, the silent killers of a codebase.",
    "In the throes of defeat, new strategies emerge.",
    "The weight of expectation bears heavily on even the most seasoned developer.",
    "The tangled web of dependencies threatens to ensnare even the most agile mind.",
    // Shakespeare
    "For God's sake let us sit upon the ground, And tell sad stories of the death of devs: ; How some have been depos'd, some slain in bug reports",
    "Some are born mad, some achieve madness, and some have madness thrust upon 'em.",
    "Though this be madness, yet there is method in't.",
    "Oh, that way madness lies; let us shun that.",
    "Good Lord, what madness rules in brainsick men, when for so slight and frivolous a bug such factious emulations should arise!",
    // Jeeves
    `“What are the chances of a cobra biting Harold, Jeeves?", "Slight, I should imagine, sir. And in such an event, knowing the boy as intimately as I do, my anxiety would be entirely for the snake.”`,
    "I've found, as a general rule of life, that the things you think are going to be the scaliest nearly always turn out not so bad after all.",
    "Good Lord, Moo! Is there anything you don’t know?’ ‘I couldn’t say, sir."
]

function getRandomEntry<T>(arr: T[], seed?: string | (() => number)) {
    let r: number
    if (seed) {
        if (typeof seed === "string") {
            const rng = seedrandom(seed)
            r = rng()
        } else {
            r = seed()
        }
    } else {
        r = Math.random()
    }

    return arr[Math.floor(r * arr.length)]
}

export function moo(dontLogToConsole?: boolean, text?: string, seed?: string | (() => number)) {
    if (!text) {
        text = getRandomEntry(MOO_QUOTES, seed)
    }

    if (dontLogToConsole) {
        return text
    }

    console.log(
        `%c ________________________________________
< ${text} >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
        "font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38) , 2px 2px 0 rgb(226,91,14) , 3px 3px 0 rgb(245,221,8) , 4px 4px 0 rgb(5,148,68) , 5px 5px 0 rgb(2,135,206) , 6px 6px 0 rgb(4,77,145) , 7px 7px 0 rgb(42,21,113)"
    )

    return text
}

export function seededMoo(seed: string) {
    const rng = seedrandom(seed)
    return (dontLogToConsole?: boolean, text?: string) => moo(dontLogToConsole, text, rng)
}
