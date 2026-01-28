<template>
    <div>{{ display }}</div>
</template>

<script setup>
const text = "精弘网络取精用弘"
const groupSize = 4
const typingSpeed = 150
const deletingSpeed = 50
const pauseTime = 1000
const display = ref("")
let index = 0
let charIndex = 0
let isDeleting = false
function tick() {
    const groupStart = index * groupSize
    const groupEnd = groupStart + groupSize
    const group = text.slice(groupStart, groupEnd)
    if (!group) {
        index = 0
        return tick()
    }
    if (!isDeleting) {
        charIndex++
        display.value = group.slice(0, charIndex)
        if (charIndex === group.length) {
            isDeleting = true
            setTimeout(tick, pauseTime)
            return
        }
    } else {
        charIndex--
        display.value = group.slice(0, charIndex)
        if (charIndex === 0) {
            isDeleting = false
            index++
        }
    }
    setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
}

onMounted(() => {
    tick()
})
</script>