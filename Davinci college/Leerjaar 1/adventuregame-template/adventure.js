import java.awt.Color;
import java.awt.Container;
import.java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;


public class game{

	JFrame window;
	Container con;
	JPanel titleNamePanel, startButtonPanel;
	JLabel titleNameLabel;
	Font titleFont = new Font("Times New Roman, Font.PLAIN, 90");
	public static voic man (string[] args){

		new game();
	}

	public game(){

		window = new JFrame();
		window.setSize(800,600);
		window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		window.getContentPane().setBackground(Color.black);
		window.setLayout(null);
		window.setVisible(true);
		con = window.getContentPane();

		titleNamePanel = new JPanel();
		titleNamePanel.setBounds(100,100,600,150);
		titleNamePanel.setBackground(Color.black);
		titleNameLabel = new JLabel("ADVENTURE");
		titleNameLabel.setForeGround(Color.white);
		titleNameLabel.setFont(titleFont);

		startButtonPanel = new JPanel();
		startButtonPanel.setBounds(300,400,200,100);
		startButtonPanel.setBackground(Color.blue);

		titleNamePanel.add(titleNameLabel);
		con.add(titleNamePanel);
		con.add(startButtonPanel);



	}

}