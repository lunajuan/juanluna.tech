import { useLocalStorage, useMediaQuery } from "usehooks-ts"
import { type HTMLDivProps } from "../types/html.types"
import { DARK_MODE_LOCAL_STORAGE_KEY, COLOR_SCHEME_QUERY } from "../constants"
import { useEffect } from "react"

type Props = HTMLDivProps
export default function ThemeSwitch({ ...props }: Props) {
  const { isDarkMode, toggle } = useDarkMode()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  return (
    <div {...props}>
      <button onClick={toggle} className="block p-4">{isDarkMode ? "Light" : "Dark"}</button>
    </div>
  )
}

type DarkModeOptions = {
  defaultValue?: boolean
  localStorageKey?: string
  initializeWithValue?: boolean
}

type DarkModeReturn = {
  isDarkMode: boolean
  toggle: () => void
  enable: () => void
  disable: () => void
  set: (value: boolean) => void
}

export function useDarkMode(options: DarkModeOptions = {}): DarkModeReturn {
  const {
    defaultValue,
    localStorageKey = DARK_MODE_LOCAL_STORAGE_KEY,
    initializeWithValue = true,
  } = options

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue,
  })
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
    { initializeWithValue }
  )

  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev)
    },
    enable: () => {
      setDarkMode(true)
    },
    disable: () => {
      setDarkMode(false)
    },
    set: (value) => {
      setDarkMode(value)
    },
  }
}
