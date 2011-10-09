puts 'Print the contents of an array of sixteen numbers, four numbers at a time, using just each'
puts '--------------------'

numbers=[]
[1,2,2,3,1,2,4,5,6,7,8,2,3,4,5,5].each do |x|
	numbers.push x
	if numbers.count==4
		p numbers
		numbers=[]
	end
end

puts 'Now, do the same with each_slice in Enumerable.'
puts '--------------------'
 [1,2,2,3,1,2,4,5,6,7,8,2,3,4,5,5].each_slice(4) {|x| p x}

puts 'The Tree class was interesting, but it did not allow you to specify a new tree with a clean user interface. Let the initializer accept a nested structure of hashes. You should be able to specify a tree like this: {’grandpa’ => { ’dad’ => {’child 1’ => {}, ’child 2’ => {} }, ’uncle’ => {’child 3’ => {}, ’child 4’ => {} } } }.'
puts '--------------------'

class Tree
  attr_accessor :children, :node_name

  def initialize(tree={})
	@node_name=tree.keys.at(0)
	@children = []
	tree[@node_name].each_key {|x| @children.push(Tree.new(Hash[x,tree[@node_name][x]]))}
  end

  def visit_all(&block)
    visit &block
    children.each {|c| c.visit_all &block}
  end

  def visit(&block)
    block.call self
  end
end

tree=Tree.new({'grandpa' => { 'dad' => {'child 1' => {}, 'child 2' => {} }, 'uncle' => {'child 3' => {}, 'child 4' => {} } } })
tree.visit_all {|x| puts x.node_name}

puts 'Write a simple grep'
puts '--------------------'
f=File.open('file.txt')
f.each_line{|line| puts "Find in line #{f.lineno}: #{line}" if line.match /number/}