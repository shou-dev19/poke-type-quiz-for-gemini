import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Difficulty } from '../types/pokemon';
import TypeIcon from './TypeIcon';

interface StartScreenProps {
  onStart: (difficulty: Difficulty, questionCount: number) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>('ふつう');
  const [questionCount, setQuestionCount] = useState(10);

  const difficultyDescriptions = {
    'かんたん': '基本的なタイプの相性のみ（4択）',
    'ふつう': '全18タイプの相性問題（4択）',
    'むずかしい': '複合タイプも含む（6択）'
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white/90 backdrop-blur-sm border-none shadow-2xl">
        <CardHeader className="text-center pt-12 pb-8">
          <CardTitle className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
            ポケモンタイプ相性クイズ
          </CardTitle>
          <p className="text-lg text-slate-600">
            ポケモンのタイプ相性を覚えて、バトルマスターを目指そう！
          </p>
        </CardHeader>
        
        <CardContent className="px-10 pb-10 space-y-8">
          <div className="flex justify-center space-x-4 py-4">
            {['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり', 'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト', 'ドラゴン', 'あく', 'はがね', 'フェアリー'].map((type) => (
              <TypeIcon 
                key={type} 
                type={type as any} 
                size="sm"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <label className="text-slate-700 font-semibold">難易度を選択してください</label>
              <Select value={difficulty} onValueChange={(value) => setDifficulty(value as Difficulty)}>
                <SelectTrigger className="w-full py-6 text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="かんたん">かんたん</SelectItem>
                  <SelectItem value="ふつう">ふつう</SelectItem>
                  <SelectItem value="むずかしい">むずかしい</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-slate-500 pt-1">
                {difficultyDescriptions[difficulty]}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-slate-700 font-semibold">問題数を選択してください</label>
              <Select value={questionCount.toString()} onValueChange={(value) => setQuestionCount(parseInt(value))}>
                <SelectTrigger className="w-full py-6 text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5問</SelectItem>
                  <SelectItem value="10">10問</SelectItem>
                  <SelectItem value="15">15問</SelectItem>
                  <SelectItem value="20">20問</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-slate-100/80 p-6 rounded-lg space-y-3">
            <h3 className="text-xl font-bold text-slate-800">ルール</h3>
            <ul className="text-slate-600 space-y-2 list-disc list-inside">
              <li>攻撃側のタイプが防御側のタイプに与えるダメージ倍率を答えてください</li>
              <li>選択後に攻撃アニメーションが表示されます</li>
              <li>複合タイプの場合は両方のタイプとの相性を計算します</li>
              <li>全問題終了後に結果が表示されます</li>
            </ul>
          </div>

          <Button 
            onClick={() => onStart(difficulty, questionCount)}
            className="w-full text-xl py-8 font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 rounded-lg"
            size="lg"
          >
            クイズを開始する
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}