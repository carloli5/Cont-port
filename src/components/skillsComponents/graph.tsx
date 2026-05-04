"use client"

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { FaHtml5, FaCss3, FaJava, FaReact  } from "react-icons/fa"
import { BsTypescript, BsJavascript  } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

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
    color: "#d39f94",
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

const CustomTick = (props: any) => {
  const { x, y, payload } = props
  
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-85} y={-12} width={40} height={40}>
        {iconMap[payload.value.toLowerCase()]}
      </foreignObject>
      <text x={-45} y={14} textAnchor="start" fill="#565d6d" fontSize={14} className="md:text-lg">
        {payload.value}
      </text>
    </g>
  )
}

const CustomTickVertical = (props: any) => {
  const { x, y, payload } = props
  
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-45} y={-20} width={32} height={32}>
        {iconMap[payload.value.toLowerCase()]}
      </foreignObject>
      <text x={-30} y={26} textAnchor="middle" fill="#565d6d" fontSize={12}>
        {payload.value}
      </text>
    </g>
  )
}


export function ChartBarDemoAxis() {
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
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold aboreto-regular text-[#323743] pt-10 md:pt-20">
                Skills
        </h1>
      <ChartContainer config={chartConfig} className="w-full min-h-[600px] md:max-h-[600px] z-0 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart accessibilityLayer data={chartData} layout={isMobile ? "vertical" : "horizontal"}>
          <defs>
              <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d39f94" />
              <stop offset="95%" stopColor="#f1dfdc" />
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
                tick={<CustomTickVertical />}
              />
            </>
          ) : (
            <XAxis
              dataKey="language"
              height={80}
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              tick={<CustomTick />}
            />
          )}
          <Bar dataKey="desktop" fill="url(#colorDesktop)" radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
    </div>
  )
}
