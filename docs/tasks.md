# ポケモンタイプ相性クイズアプリ 実装タスクリスト

## 0. 準備
- [x] `npm init -y` を実行し `package.json` を作成する
- [x] React, TypeScript, Vite をインストールする (`npm install react react-dom typescript @vitejs/plugin-react`)
- [x] 必要な開発ツールをインストールする (`npm install -D vite`)
- [x] `vite.config.ts`, `tsconfig.json`, `index.html` を設定する

## 1. スタイリングとUIライブラリのセットアップ
- [x] Tailwind CSS をインストールし、設定ファイル (`tailwind.config.js`, `postcss.config.js`) を作成する
- [x] `docs/figma_output/styles/globals.css` の内容を `src/styles/globals.css` にコピーする
- [x] `shadcn/ui` のコンポーネント (`docs/figma_output/components/ui/*.tsx`) を `src/components/ui/` にコピーする
- [x] Framer Motion (`motion`) をインストールする (`npm install motion`)

## 2. 基本的な型定義とロジックの実装
- [x] `src/types/pokemon.ts` を作成し、`PokemonType`, `QuizQuestion`, `QuizState`, `TYPE_EFFECTIVENESS` などの型とデータを定義する ( `docs/figma_output/types/pokemon.ts` をベースに、`DUAL_TYPES` を削除したものをコピーする)
- [x] `src/utils/quizLogic.ts` を作成し、ダメージ計算ロジックと動的な複合タイプ生成を含む問題生成ロジックを実装する ( `docs/figma_output/utils/quizLogic.ts` をベースに修正する)

## 3. UIコンポーネントの実装
- [x] `src/components/TypeIcon.tsx` を作成する。`docs/design.md` に基づき、`type_table.png` のデザインを参考にしたSVGアイコンを自作して実装する。
- [x] `src/components/StartScreen.tsx` を作成する ( `docs/figma_output/components/StartScreen.tsx` をコピーする)
- [x] `src/components/AttackAnimation.tsx` を作成する ( `docs/figma_output/components/AttackAnimation.tsx` をコピーする)
- [x] `src/components/QuizScreen.tsx` を作成する ( `docs/figma_output/components/QuizScreen.tsx` をコピーする)
- [x] `src/components/ResultScreen.tsx` を作成する ( `docs/figma_output/components/ResultScreen.tsx` をコピーする)

## 4. アプリケーションの統合と仕上げ
- [x] `src/App.tsx` を作成し、状態管理と画面遷移のロジックを実装する ( `docs/figma_output/App.tsx` をコピーする)
- [x] `src/main.tsx` を作成し、`App` コンポーネントをレンダリングする
- [x] アプリケーション全体の動作確認とデバッグを行う
- [x] `npm run build` を実行し、ビルドが成功することを確認する

## 5. UI改修
- [ ] `StartScreen` コンポーネントをFigmaデザインに近づける
- [ ] `QuizScreen` コンポーネントをFigmaデザインに近づける
- [ ] `ResultScreen` コンポーネントをFigmaデザインに近づける
- [ ] `AttackAnimation` コンポーネントをFigmaデザインに近づける