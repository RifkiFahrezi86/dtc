import { useEffect, useRef, useState } from "react"

type GameId = "quiz" | "memory" | "reflex"
type Score = {
  name: string
  game: GameId
  score: number
  date: number
}
type IconName = "arrow" | "sound" | "muted" | "expand" | "clock" | "trophy" | "spark" | "close" | "check" | "play" | "bolt"

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    sound: (
      <>
        <path d="m11 4-6 5H2v6h3l6 5V4Z" />
        <path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      </>
    ),
    muted: (
      <>
        <path d="m11 4-6 5H2v6h3l6 5V4Z" />
        <path d="m16 9 5 6m0-6-5 6" />
      </>
    ),
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    trophy: (
      <>
        <path d="M7 3h10v5c0 4-2 6-5 6s-5-2-5-6V3Zm5 11v6m-4 1h8M7 5H3v3c0 3 2 4 5 4m9-7h4v3c0 3-2 4-5 4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m8 4 12 8-12 8V4Z" />,
    bolt: <path d="m14 2-9 12h7l-2 8 9-12h-7l2-8Z" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Alien({
  className = "",
  color = "currentColor",
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 110 80"
      className={className}
      fill={color}
      aria-hidden="true"
    >
      <path d="M20 0h10v10H20zm60 0h10v10H80zM30 10h10v10H30zm40 0h10v10H70zM20 20h70v10H20zM10 30h90v30H10zM0 40h10v30H0zm100 0h10v30h-10zM20 60h20v10H20zm50 0h20v10H70zM10 70h20v10H10zm70 0h20v10H80z" />
      <path d="M30 30h10v10H30zm40 0h10v10H70z" fill="#252135" />
    </svg>
  )
}

function Arcade() {
  return (
    <svg
      viewBox="0 0 460 390"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="Mesin arcade DTC Play berwarna ungu dengan karakter pixel"
    >
      <ellipse cx="249" cy="358" rx="138" ry="17" fill="#c7b7e9" opacity=".6" />
      <path
        d="m142 41 152-12 51 29-153 17Z"
        fill="#c6b4ed"
        stroke="#443160"
        strokeWidth="2"
      />
      <path
        d="m294 29 51 29v103l-18 30 17 39v114l-53 22-6-133 13-42-7-32Z"
        fill="#a18bcf"
        stroke="#443160"
        strokeWidth="2"
      />
      <path
        d="m142 41 152-12-3 131 18 49-18 24v133l-149-18V236l-18-24 18-52Z"
        fill="#e5dafa"
        stroke="#443160"
        strokeWidth="2"
      />
      <path
        d="m142 41 152-12v49l-152 12Z"
        fill="#7952c4"
        stroke="#443160"
        strokeWidth="2"
      />
      <text
        x="160"
        y="69"
        fill="#fff5da"
        fontSize="23"
        fontWeight="700"
        fontFamily="Space Grotesk, sans-serif"
        transform="rotate(-5 160 69)"
      >
        DTC PLAY
      </text>
      <path
        d="m151 101 131-10-2 73-129 9Z"
        fill="#8a70b4"
        stroke="#443160"
        strokeWidth="2"
      />
      <path
        d="m160 107 112-9-1 63-111 8Z"
        fill="#292735"
        stroke="#443160"
        strokeWidth="2"
      />
      <g fill="#c8efae">
        <path d="M196 114h5v5h-5zm35 0h5v5h-5zm-25 5h20v5h-20zm-5 5h30v5h-30zm-5 5h40v15h-40zm-5 5h5v15h-5zm45 0h5v15h-5zm-35 10h10v5h-10zm20 0h10v5h-10zm-25 5h10v5h-10zm30 0h10v5h-10z" />
      </g>
      <path d="M206 129h5v5h-5zm15 0h5v5h-5z" fill="#292735" />
      <text
        x="179"
        y="160"
        fill="#f8f1dd"
        fontSize="6"
        fontFamily="monospace"
        letterSpacing="2"
      >
        READY TO PLAY?
      </text>
      <path
        d="m142 174 149-10 18 45-167 14-18-11Z"
        fill="#bea5ed"
        stroke="#443160"
        strokeWidth="2"
      />
      <ellipse cx="174" cy="202" rx="14" ry="6" fill="#594070" />
      <path d="M174 198v-17" stroke="#443160" strokeWidth="5" />
      <circle
        cx="174"
        cy="178"
        r="8"
        fill="#fa997f"
        stroke="#443160"
        strokeWidth="2"
      />
      <ellipse
        cx="246"
        cy="198"
        rx="10"
        ry="5"
        fill="#fa997f"
        stroke="#443160"
        strokeWidth="1.5"
      />
      <ellipse
        cx="271"
        cy="195"
        rx="10"
        ry="5"
        fill="#efd998"
        stroke="#443160"
        strokeWidth="1.5"
      />
      <path
        d="m142 223 167-14-18 24-149 12Z"
        fill="#9874cc"
        stroke="#443160"
        strokeWidth="2"
      />
      <path d="m154 252 125-7v104l-125-14Z" fill="#d5c4f0" />
      <rect
        x="199"
        y="260"
        width="40"
        height="27"
        rx="3"
        fill="#9d85c0"
        stroke="#443160"
        strokeWidth="1.5"
      />
      <path d="M210 269h19" stroke="#443160" strokeWidth="4" />
      <path
        d="m187 313 10-14 10 14 10-14 10 14 10-14 10 14"
        fill="none"
        stroke="#ac93d1"
        strokeWidth="3"
      />
      <g stroke="#7652bc" strokeWidth="2" fill="none">
        <path d="M96 99v21m-10-10h20M354 271v24m-12-12h24" />
        <path d="m349 99 7 16 17 6-17 6-7 17-6-17-17-6 17-6Z" fill="#fbe6a5" />
        <circle cx="110" cy="295" r="5" />
      </g>
      <g transform="translate(333 188) rotate(12)">
        <rect
          width="75"
          height="33"
          rx="16"
          fill="#fff8e8"
          stroke="#443160"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="21"
          fontSize="12"
          fill="#443160"
          fontWeight="700"
          fontFamily="Space Grotesk, sans-serif"
        >
          LET'S PLAY
        </text>
      </g>
    </svg>
  )
}

const games: {
  id: GameId
  number: string
  title: string
  subtitle: string
  label: string
  duration: number
  color: string
  tag: string
}[] = [
  {
    id: "quiz",
    number: "01",
    title: "Tech Quiz",
    subtitle: "Seberapa tech-savvy kamu? Uji wawasanmu!",
    label: "ASAH WAWASAN",
    duration: 60,
    color: "bg-[#e9e0f5]",
    tag: "5 pertanyaan",
  },
  {
    id: "memory",
    number: "02",
    title: "Memory Match",
    subtitle: "Temukan pasangan. Buktikan ingatanmu.",
    label: "UJI INGATAN",
    duration: 60,
    color: "bg-[#f7eac5]",
    tag: "6 pasangan",
  },
  {
    id: "reflex",
    number: "03",
    title: "Reflex Rush",
    subtitle: "Mata fokus, tangan cepat. Kejar skornya!",
    label: "ADU KECEPATAN",
    duration: 30,
    color: "bg-[#e3ebd9]",
    tag: "Tanpa batas",
  },
]
const questions = [
  {
    text: "Apa kepanjangan dari AI?",
    answers: [
      "Automated Internet",
      "Artificial Intelligence",
      "Advanced Interface",
      "Applied Information",
    ],
    correct: 1,
  },
  {
    text: "Manakah contoh kata sandi paling aman?",
    answers: ["12345678", "namasaya", "Dtc!9#rL2@q", "password"],
    correct: 2,
  },
  {
    text: "Apa fungsi utama cloud storage?",
    answers: [
      "Menyimpan data secara online",
      "Mempercepat baterai",
      "Mencetak foto",
      "Membuat kabel jaringan",
    ],
    correct: 0,
  },
  {
    text: "QR pada QR Code merupakan singkatan dari…",
    answers: [
      "Quality Reader",
      "Quantum Record",
      "Quick Route",
      "Quick Response",
    ],
    correct: 3,
  },
  {
    text: "Apa yang sebaiknya dilakukan saat menerima tautan mencurigakan?",
    answers: [
      "Langsung klik",
      "Bagikan ke semua teman",
      "Periksa sumber dan jangan klik",
      "Masukkan kata sandi",
    ],
    correct: 2,
  },
]
const memorySymbols = ["✦", "◎", "⚡", "▲", "♥", "▧"]
const instructions: Record<GameId, string[]> = {
  quiz: [
    "Jawab 5 pertanyaan seputar teknologi.",
    "Setiap jawaban benar bernilai 200 poin.",
    "Kamu punya 60 detik untuk menyelesaikan semuanya.",
  ],
  memory: [
    "Buka dua kartu dan temukan simbol yang sama.",
    "Setiap pasangan bernilai 150 poin.",
    "Selesaikan sebelum 60 detik untuk mendapat bonus waktu.",
  ],
  reflex: [
    "Ketuk kotak ungu secepat mungkin.",
    "Setiap ketukan tepat bernilai 50 poin; salah dikurangi 10.",
    "Kumpulkan sebanyak mungkin poin dalam 30 detik.",
  ],
}

function GameArt({ id }: { id: GameId }) {
  if (id === "quiz")
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute left-10 top-9 rotate-[-14deg] font-display text-3xl text-[#a58acb]">
          +
        </div>
        <div className="rotate-[-7deg] rounded-xl border-2 border-[#8467b3] bg-[#faf7ff] px-9 py-4 shadow-[5px_6px_0_#c4b1e4]">
          <span className="font-display text-[60px] font-bold leading-none text-[#7754b4]">
            ?
          </span>
        </div>
        <div className="absolute right-[25%] top-[22%] rotate-12 rounded-lg border-2 border-[#8467b3] bg-[#c9e6b3] p-2 text-[#5c4877]">
          <Icon name="check" className="size-6" />
        </div>
        <span className="absolute bottom-8 right-12 text-2xl text-[#a58acb]">
          ✧
        </span>
      </div>
    )
  if (id === "memory")
    return (
      <div className="flex h-full items-center justify-center gap-3">
        <div className="-rotate-12 rounded-xl border-2 border-[#ab9056] bg-[#fffbeb] px-5 py-4 font-display text-5xl text-[#9d7840] shadow-[4px_5px_0_#dfcb9d]">
          ✦
        </div>
        <div className="translate-y-2 rotate-6 rounded-xl border-2 border-[#ab9056] bg-[#e9bf69] px-5 py-4 font-display text-5xl text-[#fffae8] shadow-[4px_5px_0_#dfcb9d]">
          ✦
        </div>
        <span className="absolute right-12 top-7 text-2xl text-[#b09454]">
          +
        </span>
      </div>
    )
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative grid grid-cols-3 gap-2 -rotate-6">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`flex size-8 items-center justify-center rounded-md border border-[#a0b28c] ${
              index === 4
                ? "bg-[#748e59] text-[#f5ffde] shadow-[2px_2px_0_#aabd94]"
                : "bg-[#f4f7eb]"
            }`}
          >
            {index === 4 && <Icon name="bolt" className="size-5" />}
          </div>
        ))}
        <svg
          viewBox="0 0 32 40"
          className="absolute -right-4 bottom-0 h-12 w-10 translate-y-2 rotate-12"
          fill="#fff"
          stroke="#46543a"
          strokeWidth="1.5"
        >
          <path d="M4 2v29l8-8 6 13 6-3-6-12 11-1Z" />
        </svg>
      </div>
      <span className="absolute left-12 top-8 text-2xl text-[#8ba271]">✧</span>
    </div>
  )
}

function readScores(): Score[] {
  try {
    const data: unknown = JSON.parse(
      localStorage.getItem("dtc-play-scores") || "[]",
    )
    return Array.isArray(data)
      ? data.filter(
          (item): item is Score =>
            typeof item?.name === "string" &&
            games.some((game) => game.id === item.game) &&
            typeof item.score === "number" &&
            Number.isFinite(item.score) &&
            typeof item.date === "number",
        )
      : []
  } catch {
    return []
  }
}

export default function App() {
  const [tab, setTab] = useState("games")
  const [sound, setSound] = useState(false)
  const [scores, setScores] = useState<Score[]>(readScores)
  const [filter, setFilter] = useState<GameId | "all">("all")
  const [selected, setSelected] = useState<GameId | null>(null)
  const [phase, setPhase] = useState<"setup" | "playing" | "result">("setup")
  const [name, setName] = useState("")
  const [time, setTime] = useState(60)
  const [points, setPoints] = useState(0)
  const [question, setQuestion] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [cards, setCards] = useState<number[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [target, setTarget] = useState(4)
  const [hits, setHits] = useState(0)
  const [storageNotice, setStorageNotice] = useState(false)
  const [fullscreenNotice, setFullscreenNotice] = useState(false)
  const finished = useRef(false)
  const pointsRef = useRef(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const audioRef = useRef<AudioContext | null>(null)
  const game = games.find((item) => item.id === selected)
  const topScores = [...scores]
    .filter((item) => filter === "all" || item.game === filter)
    .sort(
      (first, second) => second.score - first.score || first.date - second.date,
    )

  function beep(success = true) {
    if (!sound) return
    try {
      const context = audioRef.current ?? new AudioContext()
      audioRef.current = context
      void context.resume()
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.type = "sine"
      oscillator.frequency.value = success ? 660 : 220
      gain.gain.setValueAtTime(0.07, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.12)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.13)
    } catch {
      return
    }
  }
  function finish(finalPoints = points) {
    if (finished.current || !selected) return
    finished.current = true
    setPoints(finalPoints)
    setPhase("result")
    const entry: Score = {
      name: name.trim() || "Pengunjung DTC",
      game: selected,
      score: finalPoints,
      date: Date.now(),
    }
    const next = [...scores, entry]
      .sort((first, second) => second.score - first.score)
      .slice(0, 100)
    setScores(next)
    try {
      localStorage.setItem("dtc-play-scores", JSON.stringify(next))
    } catch {
      setStorageNotice(true)
    }
  }
  function openGame(id: GameId) {
    setSelected(id)
    setPhase("setup")
    setName("")
    finished.current = false
  }
  function startGame() {
    if (!game) return
    finished.current = false
    pointsRef.current = 0
    setPoints(0)
    setTime(game.duration)
    setQuestion(0)
    setAnswer(null)
    setFlipped([])
    setMatched([])
    setHits(0)
    setTarget(Math.floor(Math.random() * 9))
    const deck = [...Array(6).keys(), ...Array(6).keys()]
    for (let index = deck.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      ;[deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]]
    }
    setCards(deck)
    setPhase("playing")
    beep()
  }
  useEffect(() => {
    const dialog = dialogRef.current
    if (selected && dialog && !dialog.open) dialog.showModal()
    if (!selected && dialog?.open) dialog.close()
  }, [selected])
  useEffect(() => {
    if (phase !== "playing" || !selected) return
    const start = Date.now()
    const duration = games.find((item) => item.id === selected)!.duration
    const timer = window.setInterval(
      () =>
        setTime(
          Math.max(0, duration - Math.floor((Date.now() - start) / 1000)),
        ),
      200,
    )
    return () => window.clearInterval(timer)
  }, [phase, selected])
  useEffect(() => {
    if (time === 0 && phase === "playing" && selected) finish(pointsRef.current)
  }, [time, phase, selected])
  useEffect(() => {
    if (flipped.length !== 2 || phase !== "playing") return
    const same = cards[flipped[0]] === cards[flipped[1]]
    const timeout = window.setTimeout(
      () => {
        if (same) {
          const next = [...matched, ...flipped]
          setMatched(next)
          const nextPoints = points + 150
          pointsRef.current = nextPoints
          setPoints(nextPoints)
          beep()
          if (next.length === 12) finish(nextPoints + time * 5)
        } else beep(false)
        setFlipped([])
      },
      same ? 300 : 700,
    )
    return () => window.clearTimeout(timeout)
  }, [flipped, phase])
  useEffect(
    () => () => {
      void audioRef.current?.close()
    },
    [],
  )

  function chooseAnswer(index: number) {
    if (answer !== null || time === 0) return
    setAnswer(index)
    const correct = index === questions[question].correct
    if (correct) {
      pointsRef.current += 200
      setPoints(pointsRef.current)
    }
    beep(correct)
  }
  function nextQuestion() {
    if (question === questions.length - 1) finish(pointsRef.current)
    else {
      setQuestion((previous) => previous + 1)
      setAnswer(null)
    }
  }
  function navigate(next: string) {
    setTab(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else await document.documentElement.requestFullscreen()
    } catch {
      setFullscreenNotice(true)
      window.setTimeout(() => setFullscreenNotice(false), 4000)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex min-h-24 max-w-[1240px] flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-8">
          <button
            onClick={() => navigate("games")}
            aria-label="Beranda DTC Play"
            className="flex items-center gap-2.5"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
              <Alien className="w-6" />
            </span>
            <span className="font-display text-[25px] font-bold tracking-[-1px]">
              dtc<span className="ml-1 text-primary">play</span>
              <span className="ml-0.5 text-primary">.</span>
            </span>
          </button>
          <nav
            aria-label="Navigasi utama"
            className="order-3 flex w-full justify-center gap-7 text-[13px] font-semibold sm:order-none sm:w-auto sm:gap-9"
          >
            {[
              ["games", "Arena game"],
              ["leaderboard", "Papan juara"],
              ["how", "Cara main"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className={`relative py-2 transition-colors hover:text-primary ${
                  tab === id
                    ? "text-primary after:absolute after:-bottom-5 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-primary"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 font-display text-[10px] font-medium tracking-[1.2px] lg:flex">
              <span className="size-1.5 rounded-full bg-[#82a06a]" />
              EXHIBITION MODE
            </span>
            <button
              onClick={() => setSound(!sound)}
              aria-label={sound ? "Matikan suara" : "Aktifkan suara"}
              aria-pressed={sound}
              className="text-muted-foreground transition hover:text-primary"
            >
              <Icon name={sound ? "sound" : "muted"} className="size-[18px]" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="text-muted-foreground transition hover:text-primary"
              aria-label="Mode layar penuh"
            >
              <Icon name="expand" className="size-[18px]" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-6 pb-12 pt-8 lg:px-8">
        {tab === "games" && (
          <>
            <section className="relative grid overflow-hidden rounded-[24px] border border-[#e1d9eb] bg-[#eee8f6] md:grid-cols-[1.15fr_1fr]">
              <div className="relative z-10 px-7 py-10 sm:px-11 sm:py-12">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5c8e7] bg-white/40 px-3 py-1.5 text-[10px] font-bold tracking-[1.5px]">
                  <Icon name="spark" className="size-3.5 text-primary" /> DTC
                  EXHIBITION • PLAYGROUND
                </div>
                <h1 className="font-display text-[48px] font-bold leading-[1.08] tracking-[-1.3px] sm:text-[62px]">
                  Datang. Main.
                  <br />
                  <span className="text-primary">Jadi juara.</span>
                  <span className="ml-3 inline-block align-middle text-[#ac8bd3]">
                    <Icon name="spark" className="size-9 sm:size-12" />
                  </span>
                </h1>
                <p className="mt-5 max-w-[350px] text-[13px] leading-7 text-[#746b7d]">
                  Sedikit tantangan, banyak keseruan. Pilih game favoritmu,
                  kumpulkan poin, dan rebut posisi teratas!
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("game-list")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="mt-7 flex items-center gap-7 rounded-xl bg-primary px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_4px_0_#5935b0] transition hover:-translate-y-0.5 hover:bg-[#6542c5] active:translate-y-0.5 active:shadow-none"
                >
                  Mulai keseruan <Icon name="arrow" className="size-4" />
                </button>
                <div className="mt-7 flex items-center gap-4 text-[10px] text-[#7d7387]">
                  <span className="flex items-center gap-1.5">
                    <Icon name="check" className="size-3.5" /> Gratis untuk
                    semua
                  </span>
                  <span className="h-3 w-px bg-[#cfc4db]" />
                  <span>Tanpa login. Langsung main.</span>
                </div>
              </div>
              <div className="relative hidden min-h-[410px] items-center justify-center md:flex">
                <div className="absolute right-7 top-7 rounded-full border border-[#d7cae8] px-3 py-1.5 font-display text-[10px] tracking-wider text-[#89759e]">
                  INSERT FUN, NOT COINS
                </div>
                <div className="absolute size-[330px] rounded-full border border-[#e0d4ef] bg-[#e7dcf2]" />
                <div className="absolute size-[390px] rounded-full border border-[#e2d9ec]" />
                <div className="relative h-[370px] w-[440px] translate-y-4">
                  <Arcade />
                </div>
                <span className="absolute bottom-6 right-8 font-display text-[10px] tracking-wider text-[#9c8aaa]">
                  100% GOOD TIMES
                </span>
              </div>
            </section>

            <section id="game-list" className="scroll-mt-6 pt-10">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <div className="mb-1.5 text-[10px] font-bold tracking-[2px] text-primary">
                    PICK YOUR CHALLENGE
                  </div>
                  <h2 className="font-display text-[27px] font-bold tracking-[-.5px]">
                    Pilih arena kamu<span className="text-primary">.</span>
                  </h2>
                </div>
                <span className="mb-1 hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex">
                  <span className="size-1.5 rounded-full bg-[#84a16c]" /> 3 game
                  siap dimainkan
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {games.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#49366c]/5"
                  >
                    <div
                      className={`relative h-[157px] overflow-hidden ${item.color}`}
                    >
                      <span className="absolute left-4 top-3.5 font-display text-[11px] text-black/35">
                        /{item.number}
                      </span>
                      <span className="absolute right-4 top-3.5 rounded-full bg-white/60 px-2.5 py-1 text-[8px] font-bold tracking-[1px] text-black/55">
                        {item.label}
                      </span>
                      <GameArt id={item.id} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-[23px] font-bold tracking-[-.5px]">
                          {item.title}
                        </h3>
                        <span className="flex items-center gap-1 rounded-full bg-background px-2 py-1 text-[10px] text-muted-foreground">
                          <Icon name="clock" className="size-3" />
                          {item.duration} dtk
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <span className="text-[10px] text-muted-foreground">
                          {item.tag}
                          <span className="mx-2 text-border">•</span>Solo play
                        </span>
                        <button
                          onClick={() => openGame(item.id)}
                          className="flex items-center gap-2 text-[12px] font-bold text-primary transition hover:gap-3"
                        >
                          Main sekarang <Icon name="arrow" className="size-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-7 grid gap-5 md:grid-cols-[1.1fr_1fr]">
              <div className="relative flex items-center justify-between overflow-hidden rounded-2xl bg-[#292432] p-7 text-white">
                <div className="relative z-10">
                  <span className="text-[9px] font-semibold tracking-[1.6px] text-[#c7b6e9]">
                    A LITTLE PLAY GOES A LONG WAY
                  </span>
                  <h3 className="mt-3 font-display text-[23px] font-medium leading-tight">
                    Bukan cuma main.
                    <br />
                    Ini waktunya unjuk kemampuan.
                  </h3>
                  <p className="mt-3 text-[11px] text-[#b2aabf]">
                    Tantang temanmu. Siapa yang paling jago?
                  </p>
                </div>
                <div className="ml-3 flex size-24 shrink-0 rotate-12 items-center justify-center rounded-full border border-[#574966] bg-[#3d324b] text-[#d6c0ef]">
                  <Icon name="trophy" className="size-11" />
                </div>
                <div className="absolute -bottom-24 -right-8 size-64 rounded-full border border-[#413648]" />
              </div>
              <div className="rounded-2xl border border-border bg-[#f1f0e9] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                    <Icon name="trophy" className="size-4 text-primary" /> Hall
                    of fame
                  </h3>
                  <button
                    onClick={() => navigate("leaderboard")}
                    className="flex items-center gap-1 text-[10px] font-semibold text-primary"
                  >
                    Lihat semua <Icon name="arrow" className="size-3" />
                  </button>
                </div>
                {scores.length ? (
                  [...scores]
                    .sort((first, second) => second.score - first.score)
                    .slice(0, 2)
                    .map((item, index) => (
                      <div
                        key={`${item.date}-${index}`}
                        className="flex items-center gap-3 border-t border-border py-3"
                      >
                        <span className="font-display text-sm text-primary">
                          0{index + 1}
                        </span>
                        <span className="flex-1 truncate text-xs font-semibold">
                          {item.name}
                        </span>
                        <span className="font-display text-sm font-semibold">
                          {item.score}{" "}
                          <span className="text-[10px] font-normal text-muted-foreground">
                            pts
                          </span>
                        </span>
                      </div>
                    ))
                ) : (
                  <div className="flex items-center gap-4 py-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#e7dfef] text-primary">
                      <Alien className="w-6" />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold">
                        Juara pertama bisa jadi kamu!
                      </p>
                      <p className="mt-1.5 text-[11px] text-muted-foreground">
                        Main dan tinggalkan namamu di sini.
                      </p>
                    </div>
                  </div>
                )}
                <p className="mt-3 text-[9px] text-muted-foreground">
                  Skor tersimpan di perangkat ini. Siap mencetak rekor?
                </p>
              </div>
            </section>
          </>
        )}

        {tab === "leaderboard" && (
          <section className="min-h-[650px] py-8">
            <div className="text-[10px] font-bold tracking-[2px] text-primary">
              THE LOCAL LEGENDS
            </div>
            <h1 className="mt-3 font-display text-5xl font-bold">
              Papan juara<span className="text-primary">.</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Setiap permainan, kesempatan baru untuk jadi yang terbaik.
            </p>
            <div className="my-8 flex flex-wrap gap-2">
              {[{ id: "all", title: "Semua game" }, ...games].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id as GameId | "all")}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold ${
                    filter === item.id
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-card hover:border-primary"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid grid-cols-[50px_1fr_90px] gap-4 bg-secondary/50 px-6 py-4 text-[10px] font-bold uppercase tracking-wider sm:grid-cols-[70px_1fr_150px_100px]">
                <span>Rank</span>
                <span>Pemain</span>
                <span className="hidden sm:block">Arena</span>
                <span className="text-right">Skor</span>
              </div>
              {topScores.length ? (
                topScores.slice(0, 20).map((item, index) => (
                  <div
                    key={`${item.date}-${index}`}
                    className="grid grid-cols-[50px_1fr_90px] items-center gap-4 border-t border-border px-6 py-5 text-sm sm:grid-cols-[70px_1fr_150px_100px]"
                  >
                    <span
                      className={`font-display text-xl font-bold ${
                        index < 3 ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate font-semibold">{item.name}</span>
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {
                        games.find((gameItem) => gameItem.id === item.game)
                          ?.title
                      }
                    </span>
                    <span className="text-right font-display font-bold">
                      {item.score}{" "}
                      <span className="text-[10px] font-normal text-muted-foreground">
                        pts
                      </span>
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center px-5 py-20 text-center">
                  <Icon name="trophy" className="mb-5 size-14 text-[#b8a1da]" />
                  <h2 className="font-display text-2xl font-bold">
                    Rekor pertama menunggumu.
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Belum ada skor{" "}
                    {filter !== "all" ? "untuk game ini" : "di perangkat ini"}.
                    Yuk, mulai tantangan!
                  </p>
                  <button
                    onClick={() => navigate("games")}
                    className="mt-6 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white"
                  >
                    Ke arena game
                  </button>
                </div>
              )}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Papan skor lokal • Skor antar-game memiliki sistem poin berbeda.
              Pilih arena untuk perbandingan yang adil.
            </p>
          </section>
        )}

        {tab === "how" && (
          <section className="min-h-[650px] py-8">
            <span className="text-[10px] font-bold tracking-[2px] text-primary">
              READY, SET, PLAY
            </span>
            <h1 className="mt-3 font-display text-5xl font-bold">
              Sesimpel itu<span className="text-primary">.</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Tanpa akun, tanpa instalasi. Cukup rasa penasaran.
            </p>
            <div className="my-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "01",
                  "Pilih tantangan",
                  "Uji wawasan, ingatan, atau refleksmu. Pilih salah satu dari tiga arena.",
                ],
                [
                  "02",
                  "Tulis nama, lalu main",
                  "Gunakan nama panggilanmu. Ikuti petunjuk dan selesaikan tantangan sebelum waktu habis.",
                ],
                [
                  "03",
                  "Cetak rekor",
                  "Skormu otomatis masuk papan juara perangkat ini. Main lagi dan pecahkan rekormu!",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <span className="font-display text-5xl font-bold text-[#d6c6ed]">
                    {number}
                  </span>
                  <h2 className="mt-6 font-display text-xl font-bold">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-secondary p-7">
              <h2 className="font-display text-xl font-bold">
                Sedikit tips untuk calon juara
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#746584]">
                Aktifkan suara lewat ikon speaker untuk efek arcade. Gunakan
                layar penuh untuk pengalaman pameran. Semua game bisa dimainkan
                dengan sentuhan atau mouse; tombol juga mendukung Tab dan Enter.
              </p>
            </div>
            <button
              onClick={() => navigate("games")}
              className="mt-7 flex items-center gap-5 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white"
            >
              Siap, ayo main <Icon name="arrow" />
            </button>
          </section>
        )}

        <footer className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[10px] text-muted-foreground sm:flex-row">
          <span className="font-display font-semibold tracking-wider">
            DTC PLAY <span className="mx-2 font-normal text-[#bbb7be]">/</span>{" "}
            SMALL GAMES. BIG ENERGY.
          </span>
          <span>
            Dibuat untuk bertemu, bermain, dan terhubung.{" "}
            <span className="ml-2 text-primary">✦</span>
          </span>
        </footer>
      </main>

      {fullscreenNotice && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 w-max max-w-[90vw] -translate-x-1/2 rounded-xl bg-foreground px-5 py-3 text-xs text-white"
        >
          Layar penuh tidak tersedia di preview ini.
        </div>
      )}

      <dialog
        ref={dialogRef}
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null)
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[min(560px,calc(100%-32px))] overflow-y-auto rounded-3xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-[#272132]/60 backdrop:backdrop-blur-sm"
        aria-labelledby="game-dialog-title"
      >
        {game && (
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[1.5px] text-primary">
                <Alien className="w-4" /> DTC PLAY / {game.label}
              </span>
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup game"
                className="rounded-full bg-muted p-2 transition hover:bg-secondary"
              >
                <Icon name="close" className="size-4" />
              </button>
            </div>
            {phase === "setup" && (
              <>
                <h2
                  id="game-dialog-title"
                  className="font-display text-4xl font-bold"
                >
                  {game.title}
                  <span className="text-primary">.</span>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tantangan singkat. Keseruan maksimal.
                </p>
                <ol className="my-6 space-y-3 rounded-2xl bg-secondary/60 p-5">
                  {instructions[game.id].map((text, index) => (
                    <li key={text} className="flex gap-3 text-xs leading-6">
                      <span className="font-display font-bold text-primary">
                        0{index + 1}
                      </span>
                      {text}
                    </li>
                  ))}
                </ol>
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    startGame()
                  }}
                >
                  <label
                    htmlFor="player-name"
                    className="text-xs font-semibold"
                  >
                    Nama panggilan kamu{" "}
                    <span className="font-normal text-muted-foreground">
                      (opsional)
                    </span>
                  </label>
                  <input
                    id="player-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    maxLength={20}
                    autoComplete="off"
                    placeholder="Misalnya: Sang Juara"
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm placeholder:text-[#aaa4af]"
                  />
                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-sm font-bold text-white hover:bg-[#6542c5]"
                  >
                    Mulai tantangan <Icon name="play" className="size-4" />
                  </button>
                </form>
                <p className="mt-4 text-center text-[10px] text-muted-foreground">
                  {game.duration} detik • Skor otomatis tersimpan di perangkat
                  ini
                </p>
              </>
            )}

            {phase === "playing" && (
              <>
                <div className="flex items-center justify-between">
                  <h2
                    id="game-dialog-title"
                    className="font-display text-2xl font-bold"
                  >
                    {game.title}
                  </h2>
                  <span
                    className={`flex items-center gap-2 rounded-full px-3 py-2 font-display text-sm font-bold ${
                      time <= 10
                        ? "bg-red-100 text-destructive"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon name="clock" className="size-4" />
                    {time} dtk
                  </span>
                </div>
                <div className="mb-7 mt-4 flex items-center justify-between border-b border-border pb-4 text-xs text-muted-foreground">
                  <span>{name.trim() || "Pengunjung DTC"}</span>
                  <span className="font-display text-lg font-bold text-primary">
                    {points} <span className="text-xs font-normal">pts</span>
                  </span>
                </div>
                {selected === "quiz" && (
                  <>
                    <div className="text-[10px] font-bold tracking-[1px] text-muted-foreground">
                      PERTANYAAN {question + 1} / 5
                    </div>
                    <h3 className="mb-6 mt-3 font-display text-2xl font-semibold leading-snug">
                      {questions[question].text}
                    </h3>
                    <div className="space-y-3">
                      {questions[question].answers.map((text, index) => (
                        <button
                          key={text}
                          onClick={() => chooseAnswer(index)}
                          disabled={answer !== null}
                          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm transition ${
                            answer !== null &&
                            index === questions[question].correct
                              ? "border-[#96b984] bg-[#e6f1df]"
                              : answer === index
                                ? "border-red-300 bg-red-50"
                                : "border-border bg-white enabled:hover:border-primary enabled:hover:bg-secondary/50"
                          }`}
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-black/5 font-display text-xs font-bold">
                            {"ABCD"[index]}
                          </span>
                          {text}
                        </button>
                      ))}
                    </div>
                    {answer !== null && (
                      <div className="mt-5">
                        <p
                          role="status"
                          className={`text-xs ${
                            answer === questions[question].correct
                              ? "text-[#4d7c39]"
                              : "text-destructive"
                          }`}
                        >
                          {answer === questions[question].correct
                            ? "Tepat sekali! +200 poin 🎉"
                            : "Belum tepat. Jawaban benar ditandai hijau."}
                        </p>
                        <button
                          onClick={nextQuestion}
                          className="mt-4 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white"
                        >
                          {question === 4
                            ? "Lihat hasil"
                            : "Pertanyaan berikutnya →"}
                        </button>
                      </div>
                    )}
                  </>
                )}
                {selected === "memory" && (
                  <>
                    <p className="mb-5 text-center text-xs text-muted-foreground">
                      Temukan pasangan yang sama • {matched.length / 2} / 6
                      pasangan
                    </p>
                    <div className="grid grid-cols-4 gap-3">
                      {cards.map((symbol, index) => {
                        const visible =
                          flipped.includes(index) || matched.includes(index)
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              if (flipped.length < 2 && !visible && time > 0)
                                setFlipped((previous) => [...previous, index])
                            }}
                            disabled={visible || flipped.length === 2}
                            aria-label={
                              visible
                                ? `Simbol ${memorySymbols[symbol]}${
                                    matched.includes(index)
                                      ? ", sudah cocok"
                                      : ""
                                  }`
                                : `Buka kartu ${index + 1}`
                            }
                            className={`flex aspect-[.9] items-center justify-center rounded-xl border-2 text-4xl transition duration-200 ${
                              matched.includes(index)
                                ? "border-[#aec79e] bg-[#e2eed9] text-[#64864e]"
                                : visible
                                  ? "border-primary bg-white text-primary"
                                  : "border-[#cbbbdf] bg-secondary text-[#ae94cc] enabled:hover:-translate-y-1 enabled:hover:border-primary"
                            }`}
                          >
                            {visible ? (
                              memorySymbols[symbol]
                            ) : (
                              <Alien className="w-9" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                    <p className="mt-5 text-center text-[10px] text-muted-foreground">
                      150 poin per pasangan + 5 poin per detik tersisa jika
                      selesai.
                    </p>
                  </>
                )}
                {selected === "reflex" && (
                  <>
                    <p className="mb-5 text-center text-xs text-muted-foreground">
                      Ketuk kotak ungu! • {hits} ketukan tepat
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }, (_, index) => (
                        <button
                          key={index}
                          aria-label={
                            index === target
                              ? "Target aktif, ketuk sekarang"
                              : "Kotak kosong"
                          }
                          onClick={() => {
                            if (time === 0) return
                            if (index === target) {
                               pointsRef.current += 50
                               setPoints(pointsRef.current)
                              setHits((previous) => previous + 1)
                              setTarget(
                                (target + 1 + Math.floor(Math.random() * 8)) %
                                  9,
                              )
                              beep()
                            } else {
                               pointsRef.current = Math.max(0, pointsRef.current - 10)
                               setPoints(pointsRef.current)
                              beep(false)
                            }
                          }}
                          className={`flex aspect-square items-center justify-center rounded-2xl border-2 transition-colors ${
                            index === target
                              ? "border-[#5935b0] bg-primary text-white shadow-[0_4px_0_#5935b0]"
                              : "border-border bg-[#efede8] hover:bg-secondary"
                          }`}
                        >
                          {index === target && (
                            <Icon name="bolt" className="size-10" />
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-center text-[10px] text-muted-foreground">
                      Tepat +50 poin • Salah −10 poin • Fokus dan terus
                      bergerak!
                    </p>
                  </>
                )}
              </>
            )}

            {phase === "result" && (
              <div className="text-center">
                <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-[#f7eac5] text-[#9c7a3d]">
                  <Icon name="trophy" className="size-10" />
                </div>
                <span className="text-[10px] font-bold tracking-[2px] text-primary">
                  CHALLENGE COMPLETED
                </span>
                <h2
                  id="game-dialog-title"
                  className="mt-3 font-display text-3xl font-bold"
                >
                  {points > 0 ? "Nice play, " : "Tetap semangat, "}
                  {name.trim() || "pemain"}!
                </h2>
                <p className="mt-3 text-xs text-muted-foreground">
                  {points > 0
                    ? "Satu tantangan selesai. Rekor berikutnya menunggu."
                    : "Setiap juara mulai dari mencoba. Yuk, main lagi!"}
                </p>
                <div className="my-7 rounded-2xl border border-[#ded0ed] bg-secondary/60 py-7">
                  <span className="text-[10px] font-semibold tracking-wider text-[#8c789e]">
                    SKOR AKHIR · {game.title.toUpperCase()}
                  </span>
                  <div className="mt-2 font-display text-6xl font-bold text-primary">
                    {points}
                    <span className="ml-2 text-lg font-normal">pts</span>
                  </div>
                </div>
                <p role="status" className="mb-6 text-xs text-muted-foreground">
                  {storageNotice
                    ? "Skor hanya tersedia selama sesi ini; penyimpanan browser tidak tersedia."
                    : "✓ Skor kamu sudah masuk papan juara perangkat ini."}
                </p>
                <button
                  onClick={startGame}
                  className="w-full rounded-xl bg-primary py-4 text-sm font-bold text-white"
                >
                  Main lagi
                </button>
                <button
                  onClick={() => {
                    setSelected(null)
                    navigate("leaderboard")
                  }}
                  className="mt-3 w-full rounded-xl border border-border py-3.5 text-sm font-semibold text-primary"
                >
                  Lihat papan juara →
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-5 text-xs text-muted-foreground hover:text-primary"
                >
                  Kembali ke arena
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </div>
  )
}
