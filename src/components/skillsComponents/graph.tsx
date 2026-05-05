"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { FaHtml5, FaCss3, FaJava, FaReact  } from "react-icons/fa"
import { BsTypescript, BsJavascript  } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

import { useDarkMode } from "@/hooks/useDarkMode"
import type React from "react"
import { useState, useEffect } from "react";

const chartData = [
  { language: "HTML", desktop: 500},
  { language: "CSS", desktop: 350 },
  { language: "JavaScript", desktop: 300 },
  { language: "Java", desktop: 200 },
  { language: "C++", desktop: 200 },
  { language: "React", desktop: 450 },
  { language: "Firebase", desktop: 300 },
  { language: "TypeScript", desktop: 300 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    theme: {
      light: "#7d9995",
      dark: "#7dd3fc",
    },
  }
} satisfies ChartConfig

const iconMap: Record<string, React.ReactNode> = {
  html: <FaHtml5 size={32} fill="#565d6d"/>,
  css: <FaCss3 size={32} fill="#565d6d"/>,
  javascript: <BsJavascript size={32} fill="#565d6d" />,
  java: <FaJava size={32} fill="#565d6d" />,
  "c++": <PiFileCpp size={32} fill="#565d6d" />,
  react: <FaReact size={32} fill="#565d6d" />,
  firebase: <SiFirebase size={32} fill="#565d6d" />,
  typescript: <BsTypescript size={32} fill="#565d6d" />
}

const CustomTick = ({ x, y, payload, isDarkMode }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-85} y={-12} width={40} height={40}>
        {iconMap[payload.value.toLowerCase()]}
      </foreignObject>
      <text x={-45} y={14} textAnchor="start" fill={isDarkMode ? "#cbd5e1" : "#565d6d"} fontSize={14} className="md:text-lg">
        {payload.value}
      </text>
    </g>
  )
}

const CustomTickVertical = ({ x, y, payload, isDarkMode }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-45} y={-20} width={32} height={32}>
        {iconMap[payload.value.toLowerCase()]}
      </foreignObject>
      <text x={-30} y={26} textAnchor="middle" fill={isDarkMode ? "#cbd5e1" : "#565d6d"} fontSize={12}>
        {payload.value}
      </text>
    </g>
  )
}


export function ChartBarDemoAxis() {
  const { isDarkMode } = useDarkMode()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={isDarkMode ? "w-full h-full flex flex-col items-center justify-center px-4 bg-[#0f172a] text-slate-100" : "w-full h-full flex flex-col items-center justify-center px-4 bg-[#f2ebe5] text-[#323743]"}>
        <h1 className={isDarkMode ? "text-4xl md:text-6xl font-bold aboreto-regular text-slate-100 pt-10 md:pt-20" : "text-4xl md:text-6xl font-bold aboreto-regular text-[#323743] pt-10 md:pt-20"}>
                Skills
        </h1>
      <ChartContainer config={chartConfig} className={isDarkMode ? "w-full min-h-[600px] md:max-h-[600px] z-0 mt-8 rounded-[2rem] bg-[#0f172a]" : "w-full min-h-[600px] md:max-h-[600px] z-0 mt-8 rounded-[2rem] border border-slate-200/60 bg-white/90"}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart accessibilityLayer data={chartData} layout={isMobile ? "vertical" : "horizontal"}>
          <defs>
              <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isDarkMode ? "#7dd3fc" : "#7d9995"} />
              <stop offset="95%" stopColor={isDarkMode ? "#0f172a" : "#B3D1CD"} />
              </linearGradient>
          </defs>
          {isMobile ? (
            <>
              <XAxis 
                type="number"
                tickLine={false}
                axisLine={false}
                tick={false}
              />
              <YAxis
                dataKey="language"
                type="category"
                width={100}
                axisLine={false}
                tickLine={false}
                tick={<CustomTickVertical isDarkMode={isDarkMode} />}
              />
            </>
          ) : (
            <XAxis
              dataKey="language"
              height={80}
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              tick={<CustomTick isDarkMode={isDarkMode} />}
            />
          )}
          <Bar dataKey="desktop" fill="url(#colorDesktop)" radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
    </div>
  )
}
