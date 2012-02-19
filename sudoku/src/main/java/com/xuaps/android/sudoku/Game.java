package com.xuaps.android.sudoku;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

/**
 * Created by IntelliJ IDEA.
 * User: dvilchez
 * Date: 2/19/12
 * Time: 7:30 PM
 * To change this template use File | Settings | File Templates.
 */
public class Game extends Activity{

    public static final String TAG="Sudoku";
    public static final String KEY_DIFFICULTY = "org.example.sudoku.difficulty";
    public static final int DIFFICULTY_EASY=0;
    public static final int DIFFICULTY_MEDIUM=1;
    public static final int DIFFICULTY_HARD=2;
    
    private int puzzle[]=new int[9*9];
    
    private PuzzleView puzzleView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);    //To change body of overridden methods use File | Settings | File Templates.
        Log.d(TAG, "onCreate");

        //int diff=getIntent().getIntExtra(KEY_DIFFICULTY, DIFFICULTY_EASY);
        //puzzle=getPuzzle(diff);
        //calculateUsedTiles();

        puzzleView=new PuzzleView(this);
        setContentView(puzzleView);
        puzzleView.requestFocus();
    }

    public String getTileString(int i, int j) {
        return "1";  //To change body of created methods use File | Settings | File Templates.
    }
}
