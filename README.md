# Asean Youth Forum (AYO) Front End

Dibuat dengan :

- HTML5
- Javascript ES6
- Tailwind CSS
- Bootstrap

# How To Use Git Properly ( Please Read This )

### If you new in this project Read the Initial Setup Section

# Contribution Guide

# Please DO NOT Direct PUSH to main or development branch

## Braching Guide

- if you do improve

  > `git checkout -b improvement/apa-yang-di-improve`

- if you do bugfix

  > `git checkout -b bugfix/apa-yang-di-fix`

- if you do create a new feature
  > `git checkout -b feature/fitur-apa-yang-di-buat`

## Commit Message Guide

- if you do improve

  > `git commit -m "improvement: apa yang di improve"`

- if you do bugfix

  > `git commit -m "bugfix: apa yang di fix"`

- if you do create a new feature
  > `git commit -m "feature: fitur apa yang di buat"`

## Conflict Resolve Guide

1. Stash dulu kerjaan kamu supaya gak ilang

   > ` git stash`

2. Setelah itu kamu perlu pull perubahan dari branch development

   > `git pull origin development`

3. Setelah kamu berhasil melakukan pembaruan dari branch development selanjutnya kamu perlu mengembalikan pekerjaan mu sebelum nya yang ter stash

   > `git stash pop`

4. Lanjutkan Pekerjaan dengan Semestinya

5. Tapi jika ketika melakukan step kedua terjadi error conflitc atau karena kesalahan kamu, maka ikuti langkah yang bawah

## Conflict Resolve Guide V2

1. Pindah dulu ke Branch development

   > `git checkout development`

2. Kemudian pull perubahan terbaru dari branch development

   > `git pull`

3. Kemudian Pindah lagi ke branch dirimu

   > `git checkout <branch kamu>`

4. Selanjutnya kita perlu merge perubahan terbaru dari development

   > `git merge development`

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- TailwindCSS Intelesense
- Prettier
- Error Lens
- Live Server

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

  > `git clone git@github.com:midnightanggel/ayo-be-20.git`

- Pindah ke branch development

  > `git checkout development`

- Lalu mulai pekerjaanmu sebagai mestinya

## Run Development

- Project bisa dijalankan dengan menggunakan Live Server

## Demo App

- [Production Build](https://ayo-fe-38.netlify.app/)

- [Development Build](https://ayo-fe-38.vercel.app/)
