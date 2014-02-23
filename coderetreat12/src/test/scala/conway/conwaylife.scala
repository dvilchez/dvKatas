package conway

import org.scalatest.FunSuite
import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner
import sun.font.TrueTypeFont



class Cell(neightbours:Option[List[Cell]]){
	def Next():Cell = null
}

class DeadCell(neightbours:Option[List[Cell]]) extends Cell(neightbours){
	def Next():Cell = {new Cell(neightbours)}
}

class AliveCell(neightbours:Option[List[Cell]]) extends Cell(neightbours){
	def Next():Cell = new Cell(neightbours)
}

@RunWith(classOf[JUnitRunner])
class ConwaySuite extends FunSuite  {
  
  test("si menos de 2 vecinos muerta ") {
    	val cell=new AliveCell(List(new DeadCell(null),new DeadCell(null),new DeadCell(null), new DeadCell(null), new DeadCell(null), new DeadCell(null),new DeadCell(null),new DeadCell(null)));
    	cell.Next()
    	assert(cell.isInstanceOf[DeadCell])  
   }
  
  test("si 3 nace"){
      val cell=new DeadCell(List(new DeadCell(null),new DeadCell(null),new DeadCell(null), new DeadCell(null), new DeadCell(null), new DeadCell(null),new DeadCell(null),new DeadCell(null)));
      cell.Next
      assert(cell.isInstanceOf[DeadCell])
  }

}