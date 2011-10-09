secret_number=rand(10)
guess_number=-1
puts 'give me a name between 0 and 9'
guess_number=gets.to_i
while guess_number!=secret_number
	puts 'too low' if guess_number<secret_number 
	puts 'too high' unless guess_number<secret_number
	guess_number=gets.to_i
end
puts 'OK'
